import { useState } from "react";
import Typography from "../../../components/atoms/Typography";
import "./index.css"; 
import { Button } from "@material-tailwind/react"; 

function App() {
  const [loading, setLoading] = useState(true);

  const playGame = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  };
  return (
    <div className="App">
        <div className="flex px-10 pt-14 pb-8 border-b-[1px] border-gray-200">
          <Typography className="w-full" variant="h4" tag="h4" color="gray-800">
            Jogar
          </Typography>
        </div>
        <body>
          <Button onClick={playGame} style={{ marginTop: "10px" }}>
            Jogar
          </Button>

          {loading ? (
            <div className="hero">
              <div className="highway">
                <div className="city">
                  <div className="car_example_1">
                    <img
                      src="../../src/assets/images/image_1.png"
                      alt="car_example"
                    />
                  </div>
                  <div className="car_example_2">
                    <img
                      src="../../src/assets/images/image_2.png"
                      alt="car_example"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="hero">
              <div className="highway">
                <div className="city">
                  <div className="car_1">
                    <img
                      src="../../src/assets/images/image_1.png"
                      alt="car_1"
                    />
                  </div>
                  <div className="car_2">
                    <img
                      src="../../src/assets/images/image_2.png"
                      alt="car_2"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </body>
    </div>
  );
}

export default App;
