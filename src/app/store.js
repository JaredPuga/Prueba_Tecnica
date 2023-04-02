import { configureStore} from "@reduxjs/toolkit";
import buttonReducer from "../features/buttonSelect/buttonSlice";
import PokemonsSlice from "../features/pokemons/pokemonsSlice";
import pokemonIdSlice from "../features/pokemons/pokemonIdSlice";


export default configureStore({
    reducer: {
        buttonS: buttonReducer,
        pokemons: PokemonsSlice,
        pokemon: pokemonIdSlice,
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
        serializableCheck: false,
    })
})