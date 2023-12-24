import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { SignIn } from './pages/auth/signin'
import { MainLayout } from './layouts/main.layout'
import { SignUp } from './pages/auth/signup'
import { Reset } from './pages/auth/reset'
import { permittedRoutes } from './routes'

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'reset', element: <Reset /> }
    ]
  }

  const routing = useRoutes([mainRoutes, ...permittedRoutes()])

  return (
    <>
      <Toaster position="top-center" />
      {routing}
    </>
  )
}

export default App
