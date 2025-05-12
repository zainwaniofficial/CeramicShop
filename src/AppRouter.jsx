import react from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/home'

const AppRouter = () => {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
        
            
        
      </Routes>
    </div>
  )
}

export default AppRouter
