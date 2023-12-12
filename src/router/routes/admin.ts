import { lazy } from 'react';
import DashboardLayout from '../../components/templates/DashboardLayout'


const AdminRoutes = [
    {
        path: '/dashboard',
        basename: 'Dashboard',
        component: lazy(() => import('../../pages/admin/Dashboard')),
        layout: DashboardLayout,
    },
    {
        path: '/comprar',
        basename: 'Comprar',
        component: lazy(() => import('../../pages/admin/Comprar')),
        layout: DashboardLayout,
    },
    {
        path: '/jogar',
        basename: 'Jogar',
        component: lazy(() => import('../../pages/admin/Jogar')),
        layout: DashboardLayout,
    },
    {
        path: '/retirada',
        basename: 'Retirada',
        component: lazy(() => import('../../pages/admin/Retirada')),
        layout: DashboardLayout,
    },
    {
        path: '/historico',
        basename: 'Histórico',
        component: lazy(() => import('../../pages/admin/Historico')),
        layout: DashboardLayout,
    },
    {
        path: '/meus-carros',
        basename: 'Meus Carros',
        component: lazy(() => import('../../pages/admin/MeusCarros')),
        layout: DashboardLayout,
    },
]

export default AdminRoutes
