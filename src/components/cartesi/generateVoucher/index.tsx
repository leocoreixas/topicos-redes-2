import Web3 from "web3";
import { IInputBox__factory } from "@cartesi/rollups/";
import GetBalance from "../getBalance/index";
import FunctionsAdvanceEnum from "../../../util/enums/FunctionsAdvanceEnum";

const VITE_LOCALHOST_DAPP_ADDRESS = import.meta.env.VITE_LOCALHOST_DAPP_ADDRESS;
const VITE_LOCALHOST_INPUTBOX_ADDRESS = import.meta.env.VITE_LOCALHOST_INPUTBOX_ADDRESS;

async function GenerateWithDrawWallet(balance : string) {
    try {
        const localStorareUser = localStorage.getItem('address') || '';
        debugger
        let web3 = new Web3((window as any).ethereum)
        balance = balance ? balance?.toString() : '0';
        const inputContract = new web3.eth.Contract(IInputBox__factory.abi, VITE_LOCALHOST_INPUTBOX_ADDRESS);
        const ethereumInWei = web3.utils.toWei(balance, 'ether');
        const input = {
            function_id: FunctionsAdvanceEnum.GENERATE_VOUCHER,
            balance: ethereumInWei,
            address: VITE_LOCALHOST_DAPP_ADDRESS,
            user_id: localStorareUser
        }
        const inputString = JSON.stringify(input);
        const inputHex = web3.utils.utf8ToHex(inputString);
        try {
            await inputContract.methods.addInput(VITE_LOCALHOST_DAPP_ADDRESS as string, inputHex).send({ from: localStorareUser });
        } catch (error) {
            console.log(error);
        }
        const getBalance = await GetBalance(localStorareUser);
        localStorage.setItem('balance', getBalance?.toString());
        const voucher = localStorage.getItem('voucher') ? parseFloat(localStorage.getItem('voucher') as string) + parseFloat(balance) : parseFloat(balance);
        localStorage.setItem('voucher', voucher?.toString());
    } catch (error) {
        console.error("Error occurred while sending input:", error);
    }


    return null;
}

export default GenerateWithDrawWallet;

