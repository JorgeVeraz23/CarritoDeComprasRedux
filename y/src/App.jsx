import { useState } from 'react'
//Componente
import { Index } from './pages'
import {Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
function App() {
  
  return (
    <>
      <div className='container'>
          <Routes>
           <Route path='/' element={<Index />} />
           <Route path='/home' element={<Home />} />
          </Routes>
      </div>
      
    </>
  )
}

export default App
