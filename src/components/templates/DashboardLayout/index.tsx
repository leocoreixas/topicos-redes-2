import Typography from '../../atoms/Typography';
import Sidebar from '../../organisms/Sidebar/index';
import { useLocation } from 'react-router-dom';
import NavBarInfo from './../../NavBarInfo/NavBarInfo';



const DashboardLayout = ({ children }: any) => {
    const location = useLocation();
    // const history = useHistory();
    const routeNameObj = {
        '/dashboard': 'Dashboard',
        '/comprar': 'Comprar Carros',
        '/jogar': 'Jogar',
        '/retirada': 'Retirada',
        '/historico': 'Historico',
        '/configuracoes': 'Configuracoes',
    };
    const currentRouteName = routeNameObj[location.pathname as keyof typeof routeNameObj];

    return (
        <div>
            <div className="flex">
                <div className=' text-white font-bold text-lg leading-7 sticky top-0 w-99 h-screen px-8 py-16 border-r-[1px] border-gray-200'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <div className="sticky flex px-10 pt-14 pb-8 border-b-[1px] border-gray-200">
                        <Typography variant="h4" tag='h4' color="gray-800">
                            {currentRouteName}
                        </Typography>
                        <div className="ml-auto">
                            <NavBarInfo money={undefined} />
                        </div>
                    </div>
                    {children}
                </div>
             
                
            </div>

        </div>
    )
}

export default DashboardLayout