// ** Routes Imports
import AdminRoutes from './admin';
import AuthRoutes from './auth';

// ** Default Route
const DefaultRoute = '/dashboard';

// ** Merge Routes
const AppRoutes = [
    ...AuthRoutes,
    ...AdminRoutes
];

export { DefaultRoute, AppRoutes };
