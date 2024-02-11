
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
