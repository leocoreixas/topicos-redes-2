import { lazy } from 'react';
import DashboardLayout from '../../components/templates/DashboardLayout'

const AdminRoutes = [
    {
        path: '/dashboard',
        component: lazy(() => import('../../pages/admin/Dashboard')),
        layout: DashboardLayout,
    },
    {
        path: '/comprar',
        component: lazy(() => import('../../pages/admin/Comprar')),
        layout: DashboardLayout,
    },
    {
        path: '/jogar',
        component: lazy(() => import('../../pages/admin/Jogar')),
        layout: DashboardLayout,
    },
    {
        path: '/retirada',
        component: lazy(() => import('../../pages/admin/Retirada')),
        layout: DashboardLayout,
    },
    {
        path: '/historico',
        component: lazy(() => import('../../pages/admin/Historico')),
        layout: DashboardLayout,
    },
    {
        path: '/configuracoes',
        component: lazy(() => import('../../pages/admin/Configuracoes')),
        layout: DashboardLayout,
    },
    

]

export default AdminRoutes
