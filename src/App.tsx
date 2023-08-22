import { } from 'react'
import { useRoutes } from 'react-router-dom'
// import Navbar from './components/navbar'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesConfig from './app.routes'

function App() {
  // const location = useLocation()
  // const navDisabledRoutes = () => {
  //   const navRoutes = ['/login', '/register']
  //   if (navRoutes.includes(location.pathname)) return true
  //   return false
  // }

  return (
    <>
      {/* {!navDisabledRoutes() && <Navbar></Navbar>} */}
      {useRoutes(RoutesConfig)}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
