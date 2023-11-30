
import NavItem from './../../molecules/NavItem/index';
import logo from './../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

function Sidebar() {

    return (
        <div className="align-start justify-between flex flex-col h-[583px]">
            <div className="flex flex-col gap-16">
                <div className="flex justify-center items-center self-stretch gap-6">
                    <img style={{ width: 128, height: 70 }} src={logo} alt="logo" />
                </div>
                <div>
                    <ul className="flex align-start flex-col gap-6 self-stretch w-[128px]">
                        <NavLink
                            to="/dashboard"
                        >
                            {({ isActive }) => (
                                <NavItem color={isActive ? 'secondary-m' : 'gray-400'} icon='dashboard'>Dashboard</NavItem>
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
                    <NavItem color='error' icon='logout'>Sair</NavItem>
                </NavLink>

            </div>


        </div>
    );
}

export default Sidebar;