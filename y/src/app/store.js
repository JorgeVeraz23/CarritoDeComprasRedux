//configure store es una funcion de la libreria que nos permite crear el store de la aplicacion
import {configureStore} from '@reduxjs/toolkit';
//Reducer
import userReducer from '../reducers/user/userSlice';
import cartReducer from '../reducers/cart/cartSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer, 
    }
})