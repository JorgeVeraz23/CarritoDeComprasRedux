import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "jorgeveraug2@gmail.com",
    fullName: "Jorge Vera",
    token: "",
}

 export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload. email;
            state.fullName = action.payload.fullName,
            state.token = action.payload.token;
        },
        unsetUser: (state) => {
            state.email = "";
            state.fullName = "";
            state.token = "";
        }
    }
 })
//actions creators are generated for each case reducer function
 export const {setUser, unsetUser} = userSlice.actions;
 export default userSlice.reducer;