import { lazy } from 'react';
import DashboardLayout from '../../components/templates/DashboardLayout'

const AdminRoutes = [
    {
        path: '/dashboard',
        component: lazy(() => import('../../pages/admin/Dashboard')),
        layout: DashboardLayout,
    },

]

export default AdminRoutes
