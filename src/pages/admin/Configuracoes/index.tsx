import { MouseEventHandler, useEffect, useState } from "react";
import Typography from "../../../components/atoms/Typography";
import BaseBtn from "../../../components/atoms/buttons/BaseBtn";
import CarCard from "../../../components/molecules/cards/CarCard";
import AlertModal from "../../../components/molecules/modals/AlertModal";
import { set } from "zod";

interface CardTypes {
    id: number;
    title: string;
    strength: string;
    speed: string;
    chance: number;
    rarity: string;
    image: string;
}

function Configuracoes() {
    const cardList: CardTypes[] = [
        {  id: 1, title: 'Drift King', strength: '2.5', speed: '22.5', rarity:'legendary', chance: 0.0333, image: `image_7` },
        {  id: 2, title: 'Ferrari', strength: '20', speed:'5', rarity:'legendary', chance: 0.0333, image: 'image_8' },
        {  id: 3, title: 'Hudson', strength: '15', speed:'10', rarity:'legendary', chance: 0.0333, image: 'image_3' },
        {  id: 4, title: 'Red Bullet', strength: '10', speed:'10', rarity:'rare', chance: 0.0666, image: 'image_1' },
        {  id: 5, title: 'Yellow Flash', strength: '10', speed:'10', rarity:'rare', chance: 0.0666, image: 'image_5' },
        {  id: 6, title: 'Monster Truck', strength: '10', speed:'10', rarity:'rare', chance: 0.0666, image: 'image_6' },
        {  id: 7, title: 'Fusca', strength: '7.5', speed:'7.5', rarity:'common', chance: 0.10, image: 'image_4' },
        {  id: 8, title: 'Chevette', strength: '10', speed:'5', rarity:'common', chance: 0.10, image: 'image_2' },
        {  id: 9, title: 'Kombi', strength: '5', speed:'10', rarity:'common', chance: 0.10, image: 'image_9' },
    ];
    
    const [selectedCar, setSelectedCar] = useState<CardTypes | undefined>(undefined);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [isCarConfirmed, setIsCarConfirmed] = useState(false);

    const selectCar = (id: number) => {
        const car = cardList.find((car) => car.id === id);
        setSelectedCar(car);
        setConfirmModalOpen(true);
    }

    const confirmCar = () => {
        setIsCarConfirmed(true);
        setConfirmModalOpen(false);
        localStorage.setItem('selectedCar', JSON.stringify(selectedCar));
    }


    const removeCar = () => {
        setSelectedCar(undefined);
        localStorage.removeItem('selectedCar');
    }

    useEffect(() => {
      if(confirmModalOpen){
        setConfirmModalOpen(false);
      }
    }
    , [confirmModalOpen])

    return (
        <>
            <div className="px-6 py-8 ">
                <div className="flex justify-between pb-4 pt-6">
                    <Typography tag="label" variant="h5" color='gray-800'>
                        Seu Carro Selecionado
                    </Typography>
                </div>
                <div className="flex justify-center items-center">
                    {isCarConfirmed && selectedCar ? (
                        <div>         
                        <CarCard
                            key={selectedCar?.id}
                            title={selectedCar?.title}
                            strength={selectedCar?.strength}
                            speed={selectedCar?.speed}
                            image={selectedCar?.image}
                            rarity={selectedCar?.rarity}
                            hoverable
                            onClick={removeCar}
                        />
                    </div>
                    ) : (
                        <Typography tag="label" variant="h6" color='gray-800'>
                            Nenhum carro selecionado
                        </Typography>
                    )
                        
                    }
                </div>
                    
             
                <div className="pb-4 pt-6">
                    <Typography tag="label" variant="h5" color='gray-800'>
                        Seus Carros
                    </Typography>
                </div>
              
                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-5 gap-4">
                        {cardList.map((card) => (
                            <CarCard
                                key={card.id}
                                title={card.title}
                                strength={card.strength}
                                speed={card.speed}
                                image={card.image}
                                rarity={card.rarity}
                                hoverable
                                onClick={() => setConfirmModalOpen(true)}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Configuracoes;