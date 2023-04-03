import { createSlice } from "@reduxjs/toolkit";

const storedValue = localStorage.getItem('isAuth') || false;
const storedName = localStorage.getItem('name') || '';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: storedValue,
        name: storedName,
    },
    reducers: {
        changeAuth: (state, action) => {
            state.value = action.payload
            localStorage.setItem('isAuth', action.payload)
        },
        changeName: (state, action) => {
            state.name = action.payload
            localStorage.setItem('name', action.payload)
        }
    }
})

export const { changeAuth, changeName } = authSlice.actions
export default authSlice.reducer