import web3 from "web3";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useRollups } from "../../cartesi/helpers/useRollups";
import { gql } from "@apollo/client";
import { useVouchersQuery, useVoucherQuery } from "../../cartesi/helpers/generated/index";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react"
import Typography from "../../atoms/Typography";
import BaseBtn from "../../atoms/buttons/BaseBtn";


export const Vouchers = (props) => {
    const [voucherToFetch, setVoucherToFetch] = useState([0, 0]);
    const [openModal, setOpenModal] = useState(false);
    const [result, reexecuteQuery] = useVouchersQuery();
    const [loading, setLoading] = useState(false);
    const [voucherResult, reexecuteVoucherQuery] = useVoucherQuery({
        variables: { voucherIndex: voucherToFetch[0], inputIndex: voucherToFetch[1] }
    });
    const [voucherToExecute, setVoucherToExecute] = useState();
    const { data, fetching, error } = result;
    const rollups = useRollups(props.dappAddress);

    const getProof = async (voucher) => {
        setVoucherToFetch([voucher.index, voucher.input.index]);
        reexecuteVoucherQuery({ requestPolicy: 'network-only' });
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleReload = () => {
        setLoading(true);
        setTimeout(() => {
          reexecuteQuery({ requestPolicy: 'network-only' });
          setLoading(false);
        }, 2000); 
    
      };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const executeVoucher = async (voucher) => {
        if (rollups && !!voucher.proof) {

            const newVoucherToExecute = { ...voucher };
            try {
                const tx = await rollups.dappContract.executeVoucher(voucher.destination, voucher.payload, voucher.proof);
                const receipt = await tx.wait();
                newVoucherToExecute.msg = `voucher executed! (tx="${tx.hash}")`;
                if (receipt.events) {
                    newVoucherToExecute.msg = `${newVoucherToExecute.msg} - resulting events: ${JSON.stringify(receipt.events)}`;
                    newVoucherToExecute.executed = await rollups.dappContract.wasVoucherExecuted(voucher.input.index, voucher.index);
                }
            } catch (e) {
                newVoucherToExecute.msg = `COULD NOT EXECUTE VOUCHER: ${JSON.stringify(e)}`;
                console.log(`COULD NOT EXECUTE VOUCHER: ${JSON.stringify(e)}`);
            }
            setVoucherToExecute(newVoucherToExecute);
        }
    }
    useEffect(() => {
        const setVoucher = async (voucher) => {
            if (rollups) {
                voucher.executed = await rollups.dappContract.wasVoucherExecuted(voucher.input.index, voucher.index);
            }
            setVoucherToExecute(voucher);
        }

        if (!voucherResult.fetching && voucherResult.data) {
            setVoucher(voucherResult.data.voucher);
        }
    }, [voucherResult, rollups]);
    const vouchers = data?.vouchers?.edges.map((node) => {
        const n = node.node;
        let payload = n?.payload;
        let inputPayload = n?.input.payload;
        if (inputPayload) {
            try {
                inputPayload = web3.utils.toUtf8(inputPayload);
            } catch (e) {
                inputPayload = inputPayload + " (hex)";
            }
        } else {
            inputPayload = "(empty)";
        }
        if (payload) {
            const decoder = new ethers.AbiCoder();
            const selector = decoder.decode(["bytes4"], payload)[0];
            payload = ethers.hexlify(payload);
            try {
                switch (selector) {
                    case '0xa9059cbb': {
                        // erc20 transfer; 
                        const decode = decoder.decode(["address", "uint256"], payload);
                        payload = `Erc20 Transfer - Amount: ${ethers.formatEther(decode[1])} - Address: ${decode[0]}`;
                        break;
                    }
                    case '0x42842e0e': {
                        //erc721 safe transfer;
                        const decode = decoder.decode(["address", "address", "uint256"], payload);
                        payload = `Erc721 Transfer - Id: ${decode[2]} - Address: ${decode[1]}`;
                        break;
                    }
                    case '0x522f6815': {
                        //ether transfer; 
                        const decode2 = decoder.decode(["address", "uint256"], payload)
                        payload = `Ether Transfer - Amount: ${ethers.formatEther(decode2[1])} (Native eth) - Address: ${decode2[0]}`;
                        break;
                    }
                    case '0xd0def521': {
                        //erc721 mint;
                        const decode = decoder.decode(["address", "string"], payload);
                        payload = `Mint Erc721 - String: ${decode[1]} - Address: ${decode[0]}`;
                        break;
                    }
                    case '0x755edd17': {
                        //erc721 mintTo;
                        const decode = decoder.decode(["address"], payload);
                        payload = `Mint Erc721 - Address: ${decode[0]}`;
                        break;
                    }
                    case '0x6a627842': {
                        //erc721 mint;
                        const decode = decoder.decode(["address"], payload);
                        payload = `Mint Erc721 - Address: ${decode[0]}`;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            payload = "(empty)";
        }
        return {
            id: `${n?.id}`,
            index: parseInt(n?.index),
            destination: `${n?.destination ?? ""}`,
            payload: `${payload}`,
            input: n ? { index: n.input.index, payload: inputPayload } : {},
            proof: null,
            executed: null,
        };
    }).sort((b, a) => {
        if (a.input.index === b.input.index) {
            return b.index - a.index;
        } else {
            return b.input.index - a.input.index;
        }
    }) ?? [];

    return (
        <div>
            {/* Your existing JSX */}
            <BaseBtn onClick={handleOpenModal}>Listar Vouchers</BaseBtn>
            <Dialog open={openModal} handler={handleCloseModal}>
                <DialogHeader>
                    <Typography tag="h6" variant="label-lg" color="gray-800">
                        Vouchers
                    </Typography>
                </DialogHeader>
                <DialogBody>
                    <div className="flex flex-col">
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                {vouchers.length > 0 ? vouchers.map((voucher) => {
                                    return (
                                        <div className="flex flex-col" key={voucher.id}>
                                            <div className="flex flex-row justify-between items-center">
                                                <Typography tag="p" variant="label-md" color="gray-800">
                                                    Voucher {voucher.index}
                                                </Typography>
                                            </div>
                                            <div className="flex flex-row justify-between items-center">
                                                <Typography tag="p" variant="label-md" color="gray-800">
                                                    Input {voucher.input.index}
                                                </Typography>
                                                <Typography tag="p" variant="label-md" color="gray-800">
                                                    {voucher.executed ? "Executed" : "Not Executed"}
                                                </Typography>
                                            </div>
                                            <div className="flex flex-row justify-between items-center">
                                                <BaseBtn onClick={() => executeVoucher(voucher)}>Retirar Voucher</BaseBtn>
                                            </div>
                                        </div>
                                    );
                                }) : (
                                    <Typography align="center" tag="p" variant="h6" color="gray-800">
                                        Nenhum voucher disponível
                                    </Typography>
                                )}

                            </div>
                        )}
                    </div>
                </DialogBody>
                <DialogFooter>
                    <BaseBtn className="mr-2" onClick={handleReload}>Reload</BaseBtn>
                    <BaseBtn onClick={handleCloseModal}>Close</BaseBtn>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

