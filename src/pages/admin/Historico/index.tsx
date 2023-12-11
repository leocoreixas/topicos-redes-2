import { useState } from "react";
import HistoricCard from "../../../components/molecules/cards/HistoricCard";
import GetRun from "../../../components/cartesi/GetRun";
import { useEffect } from "react";
function Historico() {

    const [historico, setHistorico] = useState([]);
    const LOSER = 100000000000000000
    const getHistorico = async () => {
        const user = localStorage.getItem("address") as string;
        debugger
        const history = await GetRun(user);
        if(history && history.length > 0){
            debugger
            const mapHistory = history.map((item: any) => {
                return {
                    id: item.run_id,
                    created_at: item.timestamp,
                    car: item.car_1.title,
                    value: item.winner == item.user_id_1 ? item.price :LOSER,
                    status: item.winner == item.user_id_1 ? true : false
                }
            }) as any;
            setHistorico(mapHistory);
        }
    }

    useEffect(() => {
        getHistorico();
    }, []);


    return (
        <>
            <div className="px-4">
                {historico ? historico.map((item: any) => (
                    <HistoricCard key={item.id} className="mt-10 mr-20 ml-20" createdAt={item.created_at} car={item.car} value={item.value} status={item.status}/>
                )) : null
                }
            </div>
        </>
    );
}

export default Historico;
