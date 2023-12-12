
import NavItem from './../../molecules/NavItem/index';
import logo from './../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Typography from '../../atoms/Typography';

function Sidebar() {

    return (
        <div className="align-start justify-between flex flex-col h-[583px]">
            <div className="flex flex-col gap-16">
                <div className="flex justify-between items-center self-stretch gap-6">
                    <img style={{ width: 32, height: 32 }} src={logo} alt="logo" />
                    <Typography color='gray-500' className='' variant='h6' tag='h6' >RALLY DA SORTE</Typography>
                </div>
                <div>
                    <ul className="flex align-start flex-col gap-6 self-stretch w-[128px]">
                        <NavLink
                            to="/dashboard"
                        >
                            {({ isActive }) => (
                                <NavItem color={isActive ? 'secondary-m' : 'gray-400'} icon='dashboard'>Home</NavItem>
                            )}

                        </NavLink>
                        <NavLink
                            to="/comprar"
                        >
                            {({ isActive }) => (
                                <NavItem color={isActive ? 'secondary-m' : 'gray-400'} icon='shopping_cart'>Comprar Carros</NavItem>
                            )}

                        </NavLink>
                        <NavLink
                            to="/jogar"
                        >
                            {({ isActive }) => (
                                <NavItem color={isActive ? 'secondary-m' : 'gray-400'} icon='game'>Jogar</NavItem>
                            )}

                        </NavLink>
                        <NavLink
                            to="/historico"
                        >
                            {({ isActive }) => (       
                                <NavItem color={isActive ? 'secondary-m' : 'gray-400'} icon='book'>Minhas Corridas</NavItem>
                            )}

                        </NavLink>
                        <NavLink
                            to="/meus-carros"
                        >
                            {({ isActive }) => (
                                <NavItem color={isActive ? 'secondary-m' : 'gray-400'} icon='car'>Garagem</NavItem>
                            )}

                        </NavLink>
                    </ul>
                </div>
            </div>
            <div>
                <NavLink
                    onClick={() => localStorage.removeItem('auth')}
                    to="/login"
                >
                    <NavItem color='error-m' icon='logout'>Sair</NavItem>
                </NavLink>

            </div>


        </div>
    );
}

export default Sidebar;