import { } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'

import RoutesConfig from './app.routes'

function App() {
  const routes = useRoutes(RoutesConfig)
  const location = useLocation()
  const navDisabledRoutes = () => {
    const navRoutes = ['/login', '/register']
    if (navRoutes.includes(location.pathname)) return true
    return false
  }
  if (location.pathname === '/login') return

  return (
    <>
      {!navDisabledRoutes() && <Navbar></Navbar>}
      {routes}
    </>
  )
}

export default App
