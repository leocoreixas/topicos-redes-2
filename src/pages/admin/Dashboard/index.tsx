import { useState } from "react";
import TutorialCard from "../../../components/molecules/cards/TutorialCard";
import Typography from "../../../components/atoms/Typography";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();
    
    const [pagesList, setPagesList] = useState([
        { id: 1, title: 'Comprar Carros', description: 'Essa parte do site é destinada a compra de carros utilizando o Etherium, para isso é necessário estar logada em sua cateira da MetaMask e ter saldo suficiente para a compra do carro desejado.'},
        { id: 2, title: 'Jogar', description: 'Aqui você jogará o Rally da Sorte, porém, para isso, precisa ter carros para jogar. Você pode comprar carros na aba "Comprar Carros" e depois entrar em Configurações para selecionar o carro que deseja jogar. O jogo ocorre da seguinte maneira: você escolhe um carro'},
        { id: 3, title: 'Histórico', description: 'Aqui você poderá ver o histórico de jogadas, para isso, basta clicar em "Ver Histórico".'},
        { id: 4, title: 'Configurações', description: 'Aqui você poderá configurar o carro que deseja jogar, para isso, basta selecionar o carro desejado e clicar em "Selecionar Carro".'},
    ]);


    return (
        <>
            <div className="px-4">
                <div className="bg-secondary-l mt-4 mb-4 p-8 rounded-2xl border border-gray-200 flex flex-col gap-2">
                    <Typography className="text-2xl font-bold mb-4" color="secondary-m" variant="h1" tag={'symbol'}>Bem vindo ao Rally da Sorte!</Typography>
                    <Typography className="text-sm font-light mb-4" variant="h6" tag={'symbol'}>Esse é um jogo de sorte, onde você pode ganhar Etherium, para isso, basta comprar carros e jogar.</Typography>
                    <Typography className="text-sm font-light" variant="h6" tag={'symbol'}>Na direita em cima você pode ver o seu saldo de Etherium, para jogar é necessário ter saldo suficiente para a compra de carros. No botão de ações você pode adicionar saldo no jogo, gerar saldo para retirada e retirar saldo do jogo.</Typography>
                </div>

                <div className="grid grid-cols-4 mb-4 gap-4">
                    {pagesList ? pagesList.map((item) => (
                        <TutorialCard key={item.id} title={item.title} description={item.description} />
                    )) : null
                    }
                </div>
                <div className="cursor-pointer p-8 rounded-2xl border border-gray-200 flex justify-center items-center gap-2 bg-secondary-m hover:bg-secondary-d transition duration-500" onClick={() => navigate('/jogar')}>
                    <Typography className="text-lg font-bold mb-2" color='white' variant="h5" tag={'symbol'}>Jogue Agora!</Typography>
                </div>
               
            </div>
        </>
    );
}

export default Dashboard;
