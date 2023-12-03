import { useEffect, useState } from "react";
import Typography from "../../../components/atoms/Typography";
import BaseBtn from "../../../components/atoms/buttons/BaseBtn";
import CarCard from "../../../components/molecules/cards/CarCard";
import Icon from "../../../components/atoms/icon";
import AlertModal from "../../../components/molecules/modals/AlertModal";
import BaseModal from "../../../components/molecules/modals/BaseModal";

interface CardTypes {
    id: number;
    title: string;
    strength: string;
    speed: string;
    chance: number;
    rarity: string;
    image: string;
}

function Comprar() {
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

    const [isLoading, setIsLoading] = useState(false);
    const [boxModalOpen, setBoxModalOpen] = useState(false);
    const [winner, setWinner] = useState<CardTypes | null>(null);

    useEffect(() => {
        if (winner !== null) {
            console.log(winner); // Isso será chamado quando o estado winner mudar
        }
    }, [winner]);

    const chooseWinner = () => {
        const totalProbability = cardList.reduce((total, card) => total + card.chance, 0);
        const normalizedChances = cardList.map(card => ({ ...card, chance: card.chance / totalProbability }));
    
        const randomNumber = Math.random();
        let cumulativeProbability = 0;
    
        for (const card of normalizedChances) {
            cumulativeProbability += card.chance;
    
            if (randomNumber < cumulativeProbability) {
                return card; // Retorna o vencedor com base na probabilidade
            }
        }
    
        console.log('Erro ao escolher o vencedor');
        return null; // Retorna null se nenhum vencedor for escolhido (tratamento de erro)
    };


    const handleClick =  () => {
        setIsLoading(true);
        new Promise((resolve) => setTimeout(resolve, 2000))
            .then(() => setIsLoading(false))
            .then(() => setBoxModalOpen(false))
            .then(() => setWinner(chooseWinner()));
    };

    return (
        <>

            <div className="sticky flex px-10 pt-14 pb-8 border-b-[1px] border-gray-200">
                <Typography className="w-full" variant="h4" tag='h4' color="gray-800">Comprar Carros</Typography>
            </div>

            <div className="px-6 py-8 ">
                <div className="flex justify-center items-center pb-12 border-b-[1px] border-gray-200 p-4">
                    <div className="">
                        <img className="w-[120px] h-[120px] pl-2 mb-10" src="../../src/assets/images/mistery_box.png" alt="ddd" />
                        <div className="flex justify-center items-center mb-4 border border-gray-300 rounded-full p-1">
                            <Typography tag="p" variant="label-md">
                                0.01 ETH
                            </Typography>
                            <Icon name="ethereum" />
                       </div>
                            
                        <BaseBtn
                            color="secondary"
                            size="lg"
                            onClick={() => setBoxModalOpen(true)}
                            className="mb-xsm text-body-lg"
                        >
                            Abrir Caixa
                        </BaseBtn>
                       
                        
                    </div>
                </div>

                <AlertModal 
                    isOpen={boxModalOpen}
                    toggle={setBoxModalOpen}
                    title="Abrir caixa?"
                    description="Deseja realmente abrir a caixa?"
                    confirmButtonText="Confirmar"
                    cancelButtonText="Cancelar"
                    onConfirm={handleClick}
                    onCancel={() => setBoxModalOpen(false)}
                    is_loading={isLoading}
                />

                <BaseModal
                    isOpen={winner !== null}
                    toggle={() => setWinner(null)}
                    title="Parabéns! Você ganhou:"
                    confirmButtonText="Confirmar"
                    onConfirm={() => setWinner(null)}
                >
                    {winner !== null ? (
                        <CarCard
                            title={winner.title}
                            strength={winner.strength}
                            speed={winner.speed}
                            image={winner.image}
                            rarity={winner.rarity}
                        />
                    ) : undefined}
                </BaseModal>


                
                    
             
                <div className="pb-4 pt-6">
                    <Typography tag="label" variant="h5" color='gray-800'>
                        Carros disponíveis:
                    </Typography>
                </div>
              
                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-5 gap-4">
                        {cardList.map((card, index) => (
                            <CarCard
                                key={index}
                                title={card.title}
                                strength={card.strength}
                                speed={card.speed}
                                image={card.image}
                                rarity={card.rarity}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Comprar;