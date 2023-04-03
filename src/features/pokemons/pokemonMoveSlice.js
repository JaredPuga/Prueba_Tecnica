import { createSlice } from "@reduxjs/toolkit";
import { showMovimientos } from "./pokemonActions";

const PokemonMoves = createSlice({
    name: 'moves',
    initialState: {
        dataMove: {},
        loadingMove: false,
        errorMove: false,
        mensajeMove: "",
        successMove: false,
    },
    extraReducers: (builder) => {
        builder.addCase(showMovimientos.pending, (state) => {
            state.loadingMove = true;
        })
        .addCase(showMovimientos.fulfilled, (state, action) => {
            state.loadingMove = false;
            state.dataMove = action.payload;
            state.successMove = true;
        })
        .addCase(showMovimientos.rejected, (state, action) => {
            state.loadingMove = false;
            state.errorMove = true;
            state.mensajeMove = action.payload;
            state.dataMove = {}
        })
    }
})

export default PokemonMoves.reducer;