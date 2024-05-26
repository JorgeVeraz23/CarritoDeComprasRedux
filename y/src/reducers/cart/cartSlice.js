import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    productsList: [],
}

 export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        //a continuacion voy a hacer un reducer del carrito de compras
        //lo que se dice aqui es que en el productList voy a hacer un spread
        //operator de lo que ya tengo mas lo que me vino en el payload
        addProductToCart: (state, action) => {
            state.productsList = [...state.productsList, action.payload];
            //luego le digo al estado que ya tenia le voy a sumar uno mas
            state.totalCount +=1;
        }
    }
 })
//actions creators are generated for each case reducer function
 export const {addProductToCart} = cartSlice.actions;
 export default cartSlice.reducer;