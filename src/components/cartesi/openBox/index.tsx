import Web3 from "web3";
import { IInputBox__factory } from "@cartesi/rollups/";
import FunctionsAdvanceEnum from "../../../util/enums/FunctionsAdvanceEnum";

const VITE_LOCALHOST_DAPP_ADDRESS = import.meta.env.VITE_LOCALHOST_DAPP_ADDRESS;
const VITE_LOCALHOST_INPUTBOX_ADDRESS =
  import.meta.env.VITE_LOCALHOST_INPUTBOX_ADDRESS;

async function OpenBox(data: any) {
  const localStorareUser = localStorage.getItem("user_id") || "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  debugger

  try {
    let web3 = new Web3((window as any).ethereum);
    const inputContract = new web3.eth.Contract(
      IInputBox__factory.abi,
      VITE_LOCALHOST_INPUTBOX_ADDRESS
    );
    const input = {
      function_id: FunctionsAdvanceEnum.OPEN_BOX,
      needToNotice: true,
      car_id: data.car_id,
      car_chance: data.car_chance,
      amount: 1,
      user_id: localStorareUser,
      created_at: new Date(),
    };
    const inputString = JSON.stringify(input);
    const inputHex = web3.utils.utf8ToHex(inputString);
    try {
      await inputContract.methods
        .addInput(VITE_LOCALHOST_DAPP_ADDRESS as string, inputHex)
        .send({ from: localStorareUser });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.error("Error occurred while sending input:", error);
  }
}

export default OpenBox;
