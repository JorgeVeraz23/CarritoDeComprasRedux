import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, unsetUser } from './reducers/user/userSlice';

function App() {
  const dispatch = useDispatch();
  const {email, fullName} = useSelector(state => state.user);

  return (
    <>
      <div className='container'>
          <h1>Bienvenido</h1>
          <p>{fullName}</p>
          <p>Su correo electronico en el store es: {email}</p>
          {/*En el siguiente boton tenemos un buto que cuando damos
          click ejecutamos un dispatch en el cual cuando damos click
          disparamos un action CREATOR*/}
          <button
            className='btn btn-primary'
            onClick={() => {
              dispatch(setUser({
                email: "jorgeveraug2@gmail.com",
                fullName: "Jorge Vera",
                token: "asdadlkamd", 
              }
              ))
            }}
          >Cambiar Usuario</button>
          <button
            className='btn btn-primary'
            onClick={() => {
              dispatch(unsetUser())
            }}
          >Cerrar Sesion</button>
      </div>
      
    </>
  )
}

export default App
