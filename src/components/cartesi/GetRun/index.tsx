import axios from "axios";
import web3 from "web3";
import FunctionsInspectEnum from "../../../util/enums/FunctionsInspectEnum";
const VITE_INSPECT_URL = import.meta.env.VITE_INSPECT_URL;

async function GetRun(user_id: string) {
  const localStorareUser = user_id || localStorage.getItem("address");
  const payload = {
    function_id: FunctionsInspectEnum.GET_RUNS,
    user_id: localStorareUser,
  };
  const stringToEncode = JSON.stringify(payload);
  const url = `${VITE_INSPECT_URL}/${stringToEncode}`;

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
    const arrayOfString = regularString.split("\n");
    const arrayOfObjects =
      arrayOfString && arrayOfString[0].length > 0
        ? arrayOfString.map((string) => {
            let stringModified = string
              .replace(/None/g, "null")
              .replace(/'/g, '"')
              .replace(/\\'/g, "")
              .replace(/False/g, "false")
              .replace(/[\u0080-\uFFFF]/g, function (match) {
                return "" + ("" + match.charCodeAt(0).toString(16)).slice(-4);
              });
            const regex = /datetime\.datetime\(([^)]+)\)/;
            const matches = stringModified.match(regex);

            if (matches && matches.length > 1) {
              const datetimeString = matches[1];
              const timestamp = parseInt(datetimeString, 10);
              const date = new Date(timestamp);
              const formattedDate = date.toISOString(); // Or format the date as needed
              stringModified = stringModified.replace(
                matches[0],
                formattedDate
              );
            }

            return JSON.parse(stringModified);
          })
        : [];
    return arrayOfObjects;
  } catch (error) {
    console.log(error);
  }
}

export default GetRun;
