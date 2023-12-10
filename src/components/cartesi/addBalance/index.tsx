import Web3 from "web3";
import { EtherPortal__factory } from "@cartesi/rollups";
import GetBalance from "../getBalance/index";

const VITE_LOCALHOST_DAPP_ADDRESS = import.meta.env.VITE_LOCALHOST_DAPP_ADDRESS;
const VITE_LOCALHOST_ETHER_PORTAL_ADDRESS = import.meta.env.VITE_LOCALHOST_ETHER_PORTAL_ADDRESS;

async function AddBalanceWallet(balance: string) {
    try {
        const localStorareUser = localStorage.getItem('address') || '';
        let web3 = new Web3(((window  as any).ethereum))
        balance = balance ? balance?.toString() : '0';
        const ethersContract = new web3.eth.Contract(EtherPortal__factory.abi, VITE_LOCALHOST_ETHER_PORTAL_ADDRESS);
        const oneEthereumInWei = web3.utils.toWei(balance, 'ether');
        await ethersContract.methods.depositEther(VITE_LOCALHOST_DAPP_ADDRESS as string, '0x').send({ from: localStorareUser, value: oneEthereumInWei.toString() });
        const queryBalance = await GetBalance(localStorareUser);
        const getBalance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance') as string) + parseFloat(queryBalance) : parseFloat(queryBalance);
        localStorage.setItem('balance', getBalance?.toString());
    } catch (error) {
        console.error("Error occurred while sending input:", error);
    }


    return null;
}

export default AddBalanceWallet;

