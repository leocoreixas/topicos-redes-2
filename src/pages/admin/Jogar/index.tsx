import { useState } from "react";
import Typography from "../../../components/atoms/Typography";
import "./index.css";
import { Alert, Button } from "@material-tailwind/react";
import CarCard from "../../../components/molecules/cards/CarCard";
import { useEffect } from "react";
import Icon from "../../../components/atoms/icon";
import playGame from "../../../components/cartesi/playGame";
import getWinner from "../../../components/cartesi/getWinner";
import AlertModal from "../../../components/molecules/modals/AlertModal";
import { useNavigate } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [winnerCar, setWinnerCar] = useState<any>(null);
  const [gameFinished, setGameFinished] = useState(false);

  const navigate = useNavigate();


  const playGameNow = async () => {
    setLoading(true);
    const user = localStorage.getItem("address") as string;
    const winner = await playGame(
      { car_id_1: selectedCar.id, car_chance_win_1: selectedCar.chance})
    
    setTimeout(async () => {
      if (winner) {
        await getWinner(user).then((response) => {
          if (response) {
            setWinnerCar(response[0]);
            setLoading(false);
          }
        });
      }
      setGameFinished(true)
    }, 10000);  
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
        <div className="flex flex-col items-center">
          <div
            className="flex justify-center items-center mb-4 border border-gray-300 rounded-full p-1"
            style={{ maxWidth: "150px", marginTop: "20px" }}
          >
            <Typography tag="p" variant="label-md">
              0.01 ETH
            </Typography>
            <Icon name="ethereum" />
          </div>

          <Button disabled={!selectedCar} onClick={playGameNow} className="mt-4">
            Jogar
          </Button>
        </div>
        {loading ? (
          <div className="first-collunm">
            <div className="hero">
              <div className="highway">
                <div className="city">
                  <div className="car_example_1">
                    <img
                      src="../../src/assets/images/image_5.png"
                      alt="car_example"
                    />
                  </div>
                  <div className="car_example_2">
                    <img
                      src="../../src/assets/images/image_6.png"
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
                  Nenhum carro selecionado. Vá para em meus carros e selecione
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
                  {selectedCar ? (
                    <img
                      src={`../../src/assets/images/${selectedCar.image}.png`}
                      alt="car_1"
                    />
                  ) : (
                    <img
                      src="../../src/assets/images/other_image.png"
                      alt="other_car"
                    />
                  )}
                </div>
                <div className="car_2">
                  <img src="../../src/assets/images/image_2.png" alt="car_2" />
                </div>
              </div>
            </div>
          </div>
        )}
        {gameFinished ? (
          <AlertModal
            isOpen={gameFinished}
            toggle={() => setGameFinished(false)}
            title="Resultado"
            description={winnerCar ? `Parabéns, você ganhou! Veja os detalhes em Minhas Corridas` : "Infelizmente você perdeu. Veja os detalhes em Minhas Corridas"}
            confirmButtonText="Minhas Corridas"
            onConfirm={() => navigate('/historico')}
            is_loading={false}
          />  
        ) : null
          
        }
      </body>
    </div>
  );
}

export default App;
