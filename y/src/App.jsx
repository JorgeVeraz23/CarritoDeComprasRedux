import { useState } from 'react'
import { useSelector } from 'react-redux'


function App() {
  const {email, fullName} = useSelector(state => state.user);

  return (
    <>
      <div className='container'>
          <h1>Titulo</h1>
          <p>El email en el store es: {email}</p>
          <p>El nombre completo en el store es: {fullName}</p>
      </div>
      
    </>
  )
}

export default App
