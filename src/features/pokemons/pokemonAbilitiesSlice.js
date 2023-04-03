import { createSlice } from "@reduxjs/toolkit";
import { showAbilities } from "./pokemonActions";

const PokemonAbilities = createSlice({
    name: 'ability',
    initialState: {
        dataAbility: {},
        loadingAbility: false,
        errorAbility: false,
        mensajeAbility: "",
        successAbility: false,
    },
    extraReducers: (builder) => {
        builder.addCase(showAbilities.pending, (state) => {
            state.loadingAbility = true;
        })
        .addCase(showAbilities.fulfilled, (state, action) => {
            state.loadingAbility = false;
            state.dataAbility = action.payload;
            state.successAbility = true;
        })
        .addCase(showAbilities.rejected, (state, action) => {
            state.loadingAbility = false;
            state.errorAbility = true;
            state.mensajeAbility = action.payload;
            state.dataAbility = {}
        })
    }
})

export default PokemonAbilities.reducer;