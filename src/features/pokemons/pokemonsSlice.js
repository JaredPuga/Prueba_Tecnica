import { createSlice } from '@reduxjs/toolkit'
import { showAllPokemons } from "./pokemonActions";


export const PokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        loading: false,
        data: [],
        error: false,
        mensaje: "",
        success: false,
    },

    extraReducers: (builder) => {
        builder.addCase(showAllPokemons.pending, (state) => {
            state.loading = true
        })
        .addCase(showAllPokemons.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.success= true
        })
        .addCase(showAllPokemons.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.mensaje = action.payload
            state.data = []
        })
    }
})

export default PokemonsSlice.reducer