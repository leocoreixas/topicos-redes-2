import React, { useState, useEffect } from "react";
import './NavbarInfo.css';
import AddBalanceWallet from "../cartesi/addBalance";
import GenerateWithdrawBalanceWallet from "../cartesi/generateVoucher";
import GetBalance from "../cartesi/getBalance";
import AddBalanceDialog from "./AddBalance";
import GenerateWithdrawDialog from "./GenerateWithDrawBalance";
import WithdrawDialog from "./WithDrawBalance";
import { Menu, MenuHandler, MenuItem, Tooltip, MenuList, Button } from "@material-tailwind/react";
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import Icon from "../atoms/icon";

const client = new Client({
    url: 'https://api.thegraph.com/subgraphs/name/cartesi/ctsi-rinkeby',
    exchanges: [cacheExchange, fetchExchange],
});

const NavBarInfo = () => {
    const [balance, setBalance] = useState(() => localStorage.getItem('balance') || 0);
    const [voucher, setVoucher] = useState(() => localStorage.getItem('voucher') || 0);
    const [user, setUser] = useState(() => localStorage.getItem('address'));
    const [open, setOpen] = useState(false); // State to control the main modal
    const [confirmOpen, setConfirmOpen] = useState(false); // State to control the confirmation modal
    const [isAddingBalance, setIsAddingBalance] = useState(false); // State for controlling the spinner
    const [anchorEl, setAnchorEl] = useState(null);
    const [openGenerateWithDraw, setOpenGenerateWithDraw] = useState(false);
    const [confirmOpenGenerateWithDraw, setConfirmOpenGenerateWithDraw] = useState(false);
    const [openWithDraw, setOpenWithDraw] = useState(false);
    const [confirmOpenWithDraw, setConfirmOpenWithDraw] = useState(false);
    const [openVoucherList, setOpenVoucherList] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenGenerateWithdraw = () => {
        setOpenGenerateWithDraw(true);
    };

    const handleCloseGenerateWithdraw = () => {
        setOpenGenerateWithDraw(false);
    };

    const handleConfirmOpenGenerateWithdraw = () => {
        setConfirmOpenGenerateWithDraw(true);
    };

    const handleConfirmCloseGenerateWithdraw = () => {
        setConfirmOpenGenerateWithDraw(false);
    };

    const handleOpenWithdraw = () => {
        setOpenWithDraw(true);
    };

    const handleCloseWithdraw = () => {
        setOpenWithDraw(false);
    };

    const handleConfirmOpenWithdraw = () => {
        setConfirmOpenWithDraw(true);
    };

    const handleConfirmCloseWithdraw = () => {
        setConfirmOpenWithDraw(false);
    };

    const handleConfirmOpen = () => {
        setConfirmOpen(true);
    };

    const handleAnchorClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAnchorClose = () => {
        setAnchorEl(null);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
    };

    const handleAddBalance = async () => {
        const newBalance = parseFloat(newBalanceInput);
        if (!isNaN(newBalance)) {
            handleConfirmOpen();
        } else {
            alert("Please enter a valid number.");
        }
    };

    const handleAddConfirmed = async () => {
        try {
            setIsAddingBalance(true);
            await AddBalanceWallet(newBalanceInput);
            setIsAddingBalance(false);
            handleClose();
            handleConfirmClose();
            await getBalanceAndUpdate();
        } catch (error) {
            setIsAddingBalance(false);
            alert("An error occurred while adding balance.");
        }
    };

    const handleGenerateWithdrawBalance = async () => {
        try {
            if (isNaN(Number(newBalanceInput))) {
                alert("Please enter a valid number.");
                return;
            }
            setIsAddingBalance(true);
            if (Number(balance) < Number(newBalanceInput)) {
                alert("You don't have balance to generate voucher.");
                setIsAddingBalance(false);
                return;
            }
            await GenerateWithdrawBalanceWallet(newBalanceInput);
            setIsAddingBalance(false);
            handleCloseGenerateWithdraw();
            handleConfirmOpenGenerateWithdraw();
            await getBalanceAndUpdate();
        } catch (error) {
            setIsAddingBalance(false);
            alert("An error occurred while withdrawing balance.");
        }
    };

    const handleWithdrawBalance = async () => {
        try {
            setIsAddingBalance(true);
            //await WithdrawBalanceWallet(newBalanceInput);
            setOpenVoucherList(true);
            setIsAddingBalance(false);
            handleCloseWithdraw();
            handleConfirmOpenWithdraw();
            await getBalanceAndUpdate();
        } catch (error) {
            setIsAddingBalance(false);
            alert("An error occurred while withdrawing balance.");
        }
    };

    const refreshBalance = async () => {
        const balance = await GetBalance(user as string);
        setBalance(balance);
        localStorage.setItem('balance', balance?.toString());
    }



    const getBalanceAndUpdate = async () => {
        const balance = await GetBalance(user as string);
        setBalance(balance);
        localStorage.setItem('balance', balance?.toString());
    };

    useEffect(() => {
        getBalanceAndUpdate();
    }, []);

    useEffect(() => {
        const handleAccountsChanged = (accounts:any) => {
            if (accounts.length === 0) {
                setUser(null); // Set user to null when disconnected
                localStorage.removeItem('address');
                window.location.href = "/";
            }
        };
        (window as any).ethereum?.on("accountsChanged", handleAccountsChanged);
        return () => {
            (window as any).ethereum.removeListener("accountsChanged", handleAccountsChanged);
        };
    }, []);

    const [newBalanceInput, setNewBalanceInput] = useState("");

    return (
        <>
        <Provider value={client}>
            <div className="navbar-info-container">
                <nav className="navbar-info">
                    <h1 className="navbar-info-logo">
                        <Button color="blue" style={ {marginRight: "30px"}} onClick={refreshBalance}>refresh Balance</Button>
                        <span className="navbar-logo-text mr-5">Balance: {balance} ETH</span>
                        <span className="navbar-logo-text mr-5">For withdraw: {voucher} ETH</span>

                        <Menu placement="bottom-end">
                            <MenuHandler>
                                <Button>Actions</Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem onClick={() => {
                                    handleAnchorClose();
                                    handleOpen();
                                }}>
                                    <div className="flex items-center">
                                        <Icon className="mr-4" name="plus" size={20} />
                                        Add Balance
                                    </div>   
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    handleAnchorClose();
                                    handleOpenGenerateWithdraw();
                                }}>
                                     <div className="flex items-center">
                                        <Icon className="mr-4" name="cycle" size={20} />
                                        Generate Balance to Withdraw
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    handleAnchorClose();
                                    handleOpenWithdraw();
                                }}>
                                    <div className="flex items-center">
                                        <Icon className="mr-4" name="withdraw" size={20} />
                                        Withdraw
                                    </div>
                                   
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </h1>
                </nav>
                <AddBalanceDialog
                    open={open}
                    handleClose={handleClose}
                    handleAddBalance={handleAddBalance}
                    handleConfirmClose={handleConfirmClose}
                    handleAddConfirmed={handleAddConfirmed}
                    newBalanceInput={newBalanceInput}
                    isAddingBalance={isAddingBalance}
                    onNewBalanceInputChange={setNewBalanceInput}
                />
                <GenerateWithdrawDialog
                    open={openGenerateWithDraw}
                    handleClose={handleCloseGenerateWithdraw}
                    handleWithdrawBalance={handleGenerateWithdrawBalance}
                    handleConfirmClose={handleConfirmCloseGenerateWithdraw}
                    newBalanceInput={newBalanceInput}
                    isAddingBalance={isAddingBalance}
                    onNewBalanceInputChange={setNewBalanceInput}
                />
                <WithdrawDialog
                    open={openWithDraw}
                    handleClose={handleCloseWithdraw}
                    handleWithdrawBalance={handleWithdrawBalance}
                    handleConfirmClose={handleConfirmCloseWithdraw}
                    newBalanceInput={newBalanceInput}
                    isAddingBalance={isAddingBalance}
                    onNewBalanceInputChange={setNewBalanceInput}
                    openVoucherList={openVoucherList}
                />
            </div>
        </Provider>
        </>
    );

};

export default NavBarInfo;
