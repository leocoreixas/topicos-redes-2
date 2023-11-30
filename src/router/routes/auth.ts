import { lazy } from 'react';

import BlankLayout from '../../components/templates/BlankLayout';

const AuthRoutes = [
  {
    path: '/not-authorized',
    component: lazy(() => import('../../pages/misc/NotAuthorized')),
    layout: BlankLayout,
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../pages/misc/Error')),
    layout: BlankLayout,
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/login',
    component: lazy(() => import('../../pages/auth/Login')),
    layout: BlankLayout,
    meta: {
      authRoute: true
    }
  }
]

export default AuthRoutes
