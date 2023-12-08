import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { DefaultRoute, AppRoutes } from './routes'

import BlankLayout from '../components/templates/BlankLayout';
import { isAuthenticated } from '../util/helpers';

const NotAuthorized = lazy(() => import('../pages/misc/NotAuthorized'))

const Error = lazy(() => import('../pages/misc/Error'))

const Router = () => {
  const FinalRoute = (props: any) => {
    const route = props.route
    if (
      (!isAuthenticated() && route.meta === undefined) ||
      (!isAuthenticated() && route.meta && !route.meta?.authRoute && !route.meta?.publicRoute)
    ) {
      return <Navigate to='/login' replace />
    } else if (route.meta && route.meta?.authRoute && isAuthenticated()) {
      return <Navigate to='/' replace />
    } else {
      return <route.component {...props} />
    }
  }

  const ResolveRoutes = () => (
    AppRoutes.map(route => (
      <Route
      
        key={route.path}
        path={route.path}
        element={
          <route.layout>
            <Suspense fallback={null}>
              <FinalRoute route={route} />
            </Suspense>
          </route.layout>
        }
      />
    ))
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            isAuthenticated() 
              ? <Navigate to={DefaultRoute} replace /> 
              : <Navigate to='/login' replace />
          }
        />
        <Route
          path='/not-authorized'
          element={
            <BlankLayout>
              <NotAuthorized />
            </BlankLayout>
          }
        />
        {ResolveRoutes()}
        <Route 
          path='*' 
          element={
            <BlankLayout>
              <Error />
            </BlankLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
