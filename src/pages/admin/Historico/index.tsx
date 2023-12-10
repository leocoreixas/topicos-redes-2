import Typography from "../../../components/atoms/Typography";
import { useState } from "react";
import HistoricCard from "../../../components/molecules/cards/HistoricCard";

function Historico() {

    const [historico, setHistorico] = useState([
        { id: 1, created_at: '10/10/2021', car: 'Ferrari', value: '0.01', status: false },
        { id: 2, created_at: '10/10/2021', car: 'Ferrari', value: '0.01', status: false },
        { id: 3, created_at: '10/10/2021', car: 'Ferrari', value: '0.01', status: false },
        { id: 4, created_at: '10/10/2021', car: 'Ferrari', value: '0.01', status: true },
        { id: 5, created_at: '10/10/2021', car: 'Ferrari', value: '0.01', status: true },
        { id: 6, created_at: '10/10/2021', car: 'Ferrari', value: '0.01', status: false },
        { id: 7, created_at: '10/10/2021', car: 'Ferrari', value: '0.01', status: false },
        { id: 8, created_at: '10/10/2021', car: 'Ferrari', value: '0.01', status: false },
    ]);




    return (
        <>
            <div className="px-4">
                {historico ? historico.map((item) => (
                    <HistoricCard key={item.id} className="mt-4" createdAt={item.created_at} car={item.car} value={item.value} status={item.status}/>
                )) : null
                }
            </div>
        </>
    );
}

export default Historico;
