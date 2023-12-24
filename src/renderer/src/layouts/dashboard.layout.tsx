import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <p>Dashboard</p>
      <Outlet />
    </>
  )
}
