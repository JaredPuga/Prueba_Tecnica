import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemons/pokemonSlice";
import buttonReducer from "../features/buttonSelect/buttonSlice";


export default configureStore({
    reducer: {
        pokemons: pokemonReducer,
        buttonS: buttonReducer,
    },
})