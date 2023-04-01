import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
    name: 'buttonSelect',
    initialState: {
        value: 'Lista'
    },
    reducers: {
        changeSelect: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeSelect } = buttonSlice.actions
export default buttonSlice.reducer