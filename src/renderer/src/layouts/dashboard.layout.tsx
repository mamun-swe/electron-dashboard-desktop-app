import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboardLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <p>Dashboard</p>
      <Outlet />
    </>
  )
}
