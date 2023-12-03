import Web3 from "web3";
import { IInputBox__factory } from "@cartesi/rollups/";
import FunctionsAdvanceEnum from "../../../util/enums/FunctionsAdvanceEnum";
import dotenv from "dotenv";
dotenv.config();

const NEXT_PUBLIC_LOCALHOST_DAPP_ADDRESS =
  process.env.NEXT_PUBLIC_LOCALHOST_DAPP_ADDRESS;
const NEXT_PUBLIC_LOCALHOST_INPUTBOX_ADDRESS =
  process.env.NEXT_PUBLIC_LOCALHOST_INPUTBOX_ADDRESS;

async function OpenBox(data: any) {
  const localStorareUser = localStorage.getItem("user_id") || "";

  try {
    let web3 = new Web3((window as any).ethereum);
    const inputContract = new web3.eth.Contract(
      IInputBox__factory.abi,
      NEXT_PUBLIC_LOCALHOST_INPUTBOX_ADDRESS
    );
    const input = {
      function_id: FunctionsAdvanceEnum.OPEN_BOX,
      needToNotice: true,
      car_id: data.car_id,
      car_chance: data.car_chance,
      user_id: localStorareUser,
      created_at: new Date(),
    };
    const inputString = JSON.stringify(input);
    const inputHex = web3.utils.utf8ToHex(inputString);
    try {
      await inputContract.methods
        .addInput(NEXT_PUBLIC_LOCALHOST_DAPP_ADDRESS as string, inputHex)
        .send({ from: localStorareUser });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.error("Error occurred while sending input:", error);
  }
}

export default OpenBox;
