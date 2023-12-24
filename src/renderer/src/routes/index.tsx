import { IAppRoute } from '@renderer/interfaces/route.interface'
import { DashboardLayout } from '@renderer/layouts/dashboard.layout'
import { Dashboard } from '@renderer/pages/dashboard'
import { Navigate } from 'react-router-dom'

const appRoutes: IAppRoute[] = [
  /** Dashboard routes */
  {
    path: 'dashboard',
    in_drawer: true,
    element: <DashboardLayout />,
    multi_menu: false,
    children: [
      {
        path: '*',
        in_drawer: false,
        multi_menu: false,
        element: <Navigate to="/404" />
      },
      { path: '', in_drawer: false, multi_menu: false, element: <Dashboard /> }
    ]
  }
]

/* Generate permitted routes */
export const permittedRoutes = (): IAppRoute[] => {
  return appRoutes
}
