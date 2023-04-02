import { createSlice } from "@reduxjs/toolkit";
import { showPokemonID } from "./pokemonActions";

const PokemonIdSlice = createSlice({
    name: 'pokemon',
    initialState: {
        dataPokemon: {},
        loadingPokemon: false,
        errorPokemon: false,
        mensajePokemon: "",
        successPokemon: false,
    },
    extraReducers: (builder) => {
        builder.addCase(showPokemonID.pending, (state) => {
            state.loadingPokemon = true;
        })
        .addCase(showPokemonID.fulfilled, (state, action) => {
            state.loadingPokemon = false;
            state.dataPokemon = action.payload;
            state.successPokemon = true;
        })
        .addCase(showPokemonID.rejected, (state, action) => {
            state.loadingPokemon = false;
            state.errorPokemon = true;
            state.mensajePokemon = action.payload;
            state.dataPokemon = {}
        })
    }
})

export default PokemonIdSlice.reducer