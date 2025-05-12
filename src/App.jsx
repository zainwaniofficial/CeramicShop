
import react from 'react'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter"
import Navbar from "./components/navbar/Navbar"

// import './app.css'



function App(){
  return(
    <>
    <Navbar/>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
   
    </>
  ) 
}
export default App
