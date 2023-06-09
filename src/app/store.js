import { configureStore} from "@reduxjs/toolkit";
import buttonReducer from "../features/buttonSelect/buttonSlice";
import PokemonsSlice from "../features/pokemons/pokemonsSlice";
import pokemonIdSlice from "../features/pokemons/pokemonIdSlice";
import pokemonMoveSlice from "../features/pokemons/pokemonMoveSlice";
import pokeAbilitiesSlice from "../features/pokemons/pokemonAbilitiesSlice";
import authSlice from "../features/auth/authSlice";


export default configureStore({
    reducer: {
        auth: authSlice,
        buttonS: buttonReducer,
        pokemons: PokemonsSlice,
        pokemon: pokemonIdSlice,
        moves: pokemonMoveSlice,
        ability: pokeAbilitiesSlice,
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
        serializableCheck: false,
    })
})