import { useState } from "react";
import Typography from "../../../components/atoms/Typography";
import "./index.css";
import { Button } from "@material-tailwind/react";
import CarCard from "../../../components/molecules/cards/CarCard";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const playGame = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  };

  useEffect(() => {
    const carString = localStorage.getItem("selectedCar");
    const carParsed = carString ? JSON.parse(carString || "") : undefined;
    if (carParsed) {
      setSelectedCar(carParsed);
    }
  }, []);
  return (
    <div className="App">
      <body>
        <Button
          onClick={playGame}
          style={{ marginTop: "15px", marginLeft: "50px" }}
        >
          Jogar
        </Button>

        {loading ? (
          <div className="first-collunm">
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
            <div className="second-collunm">
              {selectedCar ? (
                <>
                  <Typography
                    tag="label"
                    variant="h6"
                    color="gray-800"
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    Seu carro selecionado:
                  </Typography>
                  <CarCard
                    key={selectedCar.id}
                    title={selectedCar.title}
                    strength={selectedCar.strength}
                    speed={selectedCar.speed}
                    image={selectedCar.image}
                    rarity={selectedCar.rarity}
                    created_at={selectedCar.created_at}
                  />
                </>
              ) : (
                <Typography
                  tag="p"
                  variant="h6"
                  color="gray-800"
                  style={{ marginTop: "10px", marginLeft: "10px" }}
                >
                  Nenhum carro selecionado. Vá para as configurações e selecione
                  um carro.
                </Typography>
              )}
            </div>
          </div>
        ) : (
          <div className="hero">
            <div className="highway">
              <div className="city">
                <div className="car_1">
                  <img src="../../src/assets/images/image_1.png" alt="car_1" />
                </div>
                <div className="car_2">
                  <img src="../../src/assets/images/image_2.png" alt="car_2" />
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
