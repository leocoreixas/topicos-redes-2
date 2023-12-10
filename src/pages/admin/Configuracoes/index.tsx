import { MouseEventHandler, useEffect, useState } from "react";
import Typography from "../../../components/atoms/Typography";
import BaseBtn from "../../../components/atoms/buttons/BaseBtn";
import CarCard from "../../../components/molecules/cards/CarCard";
import AlertModal from "../../../components/molecules/modals/AlertModal";
import { set } from "zod";
import listCars from "../../../components/cartesi/listCars";
import { Button } from "@material-tailwind/react";
interface CardTypes {
  id: number;
  title: string;
  strength: string;
  speed: string;
  chance: number;
  rarity: string;
  image: string;
  checked?: boolean;
  created_at?: string;
}

function Configuracoes() {
  const cardList: CardTypes[] = [
    {
      id: 1,
      title: "Drift King",
      strength: "2.5",
      speed: "22.5",
      rarity: "legendary",
      chance: 0.0333,
      image: `image_7`,
    },
    {
      id: 2,
      title: "Ferrari",
      strength: "20",
      speed: "5",
      rarity: "legendary",
      chance: 0.0333,
      image: "image_8",
    },
    {
      id: 3,
      title: "Hudson",
      strength: "15",
      speed: "10",
      rarity: "legendary",
      chance: 0.0333,
      image: "image_3",
    },
    {
      id: 4,
      title: "Red Bullet",
      strength: "10",
      speed: "10",
      rarity: "rare",
      chance: 0.0666,
      image: "image_1",
    },
    {
      id: 5,
      title: "Yellow Flash",
      strength: "10",
      speed: "10",
      rarity: "rare",
      chance: 0.0666,
      image: "image_5",
    },
    {
      id: 6,
      title: "Monster Truck",
      strength: "10",
      speed: "10",
      rarity: "rare",
      chance: 0.0666,
      image: "image_6",
    },
    {
      id: 7,
      title: "Fusca",
      strength: "7.5",
      speed: "7.5",
      rarity: "common",
      chance: 0.1,
      image: "image_4",
    },
    {
      id: 8,
      title: "Chevette",
      strength: "10",
      speed: "5",
      rarity: "common",
      chance: 0.1,
      image: "image_2",
    },
    {
      id: 9,
      title: "Kombi",
      strength: "5",
      speed: "10",
      rarity: "common",
      chance: 0.1,
      image: "image_9",
    },
  ];

  const [selectedCar, setSelectedCar] = useState<CardTypes | undefined>(
    undefined
  );
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [myCars, setMyCars] = useState<CardTypes[]>([]);

  const selectCar = (date: any) => {
    const aux = myCars.map((car) => ({ ...car, checked: false }));
    setMyCars(aux);
    const car = myCars.find((car) => car.created_at === date) as any;
    debugger
    if (!car) return;
    car.checked = true;
    setSelectedCar(car);
    setConfirmModalOpen(true);
  };


  const getMyCars = async () => {
    let myCars = (await listCars()) as any;
    debugger
    myCars = myCars.map((data: any) => ({
      id: data.car.id,
      title: data.car.title,
      strength: data.car.strength,
      speed: data.car.speed,
      image: data.car.image,
      rarity: data.car.rarity,
      created_at: new Date(data.created_at).toUTCString(),
      checked: false,
    }));

    setMyCars(myCars);
  };

  const removeCar = () => {
    setSelectedCar(undefined);
    localStorage.removeItem("selectedCar");
  };

  useEffect(() => {
    getMyCars();
  }, []);

  return (
    <>
      <div className="px-6 py-8 ">
        <div className="flex justify-between pb-4 pt-6">
          <Typography tag="label" variant="h5" color="gray-800">
            Seu Carro Selecionado
          </Typography>
        </div>
        <div className="flex justify-center items-center">
          {selectedCar ? (
            <div>
              <CarCard
                key={selectedCar?.id}
                title={selectedCar?.title}
                strength={selectedCar?.strength}
                speed={selectedCar?.speed}
                image={selectedCar?.image}
                rarity={selectedCar?.rarity}
                created_at={selectedCar?.created_at}
                hoverable
                onClick={removeCar}
              />
            </div>
          ) : (
            <Typography tag="label" variant="h6" color="gray-800">
              Nenhum carro selecionado
            </Typography>
          )}
        </div>

        <div className="pb-4 pt-6">
          <Typography tag="label" variant="h5" color="gray-800">
            Seus Carros
          </Typography>
        </div>

        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-5 gap-4">
            {myCars.map((card, index) => (
              <CarCard
                key={index}
                title={card.title}
                strength={card.strength}
                speed={card.speed}
                image={card.image}
                rarity={card.rarity}
                checked={card.checked}
                created_at={card.created_at}
                hoverable
                onClick={() => selectCar(card.created_at)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Configuracoes;
