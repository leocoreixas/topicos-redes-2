import { useState } from "react";
import HistoricCard from "../../../components/molecules/cards/HistoricCard";
import GetRun from "../../../components/cartesi/GetRun";
import { useEffect } from "react";
import  Typography  from "../../../components/atoms/Typography";
function Historico() {

    const [historico, setHistorico] = useState([]);
    const LOSER = 100000000000000000
    const getHistorico = async () => {
        const user = localStorage.getItem("address") as string;
        const history = await GetRun(user);
        if(history && history.length > 0){
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
                {historico.length > 0 ? historico.map((item: any) => (
                    <HistoricCard key={item.id} className="mt-10 mr-20 ml-20" createdAt={item.created_at} car={item.car} value={item.value} status={item.status}/>
                )) : <Typography className="text-2xl font-bold mb-4 mt-3 ml-3" align="center"  variant="h4" tag={'symbol'}>Você ainda não jogou!</Typography>
                
                }
            </div>
        </>
    );
}

export default Historico;
