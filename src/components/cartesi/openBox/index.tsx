import Web3 from "web3";
import { IInputBox__factory } from "@cartesi/rollups/";
import FunctionsAdvanceEnum from "../../../util/enums/FunctionsAdvanceEnum";

const VITE_LOCALHOST_DAPP_ADDRESS = import.meta.env.VITE_LOCALHOST_DAPP_ADDRESS;
const VITE_LOCALHOST_INPUTBOX_ADDRESS =
  import.meta.env.VITE_LOCALHOST_INPUTBOX_ADDRESS;

async function OpenBox(data: any) {
  const localStorareUser = localStorage.getItem("address") as string;

  try {
    let web3 = new Web3((window as any).ethereum);
    const inputContract = new web3.eth.Contract(
      IInputBox__factory.abi,
      VITE_LOCALHOST_INPUTBOX_ADDRESS
    );
    const input = {
      function_id: FunctionsAdvanceEnum.OPEN_BOX,
      needToNotice: true,
      box_value: data.box_value,
      user_id: localStorareUser,
      created_at: new Date(),
    };
    const inputString = JSON.stringify(input);
    const inputHex = web3.utils.utf8ToHex(inputString);
    try {
      await inputContract.methods
        .addInput(VITE_LOCALHOST_DAPP_ADDRESS as string, inputHex)
        .send({ from: localStorareUser });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  } catch (error) {
    console.error("Error occurred while sending input:", error);
    return false;
  }
}

export default OpenBox;
