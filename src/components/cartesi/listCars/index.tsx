import axios from "axios";
import web3 from "web3";
import "./ListInspectReOffers.css";
import FunctionsInspectEnum from "../../../util/enums/FunctionsInspectEnum";
import dotenv from "dotenv";
dotenv.config();

const NEXT_PUBLIC_INSPECT_URL = process.env.NEXT_PUBLIC_INSPECT_URL;

async function listCars() {
  const localStorareUser = localStorage.getItem("user_id");

  const payload = {
    function_id: FunctionsInspectEnum.GET_CARS,
    user_id: localStorareUser,
  };
  const stringToEncode = JSON.stringify(payload);
  const url = `${NEXT_PUBLIC_INSPECT_URL}/${stringToEncode}`;

  let config = {
    url: url,
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await axios.get(config.url);

    const parsedData = response.data.reports[0].payload;
    const regularString = web3.utils.hexToAscii(parsedData);
    let arrayOfString = regularString.split("\n");
    arrayOfString = replaceSpecialCharacters(arrayOfString);
    const arrayOfObjects =
      arrayOfString && arrayOfString[0].length > 0
        ? arrayOfString.map((string) => {
            const stringModified = string
              .replace(/None/g, "null")
              .replace(/'/g, '"')
              .replace(/\\'/g, "")
              .replace(/False/g, "false")
              .replace(/[\u0080-\uFFFF]/g, function (match) {
                return "" + ("" + match.charCodeAt(0).toString(16)).slice(-4);
              });

            return JSON.parse(stringModified);
          })
        : [];

    return arrayOfObjects;
  } catch (error) {
    console.log(error);
  }

}

function replaceSpecialCharacters(data: any) {
    const sanitizedData = JSON.parse(JSON.stringify(data).replace(/\\/g, ''));
    return sanitizedData;
}

export default listCars;