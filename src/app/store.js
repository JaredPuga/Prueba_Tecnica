import { configureStore} from "@reduxjs/toolkit";
import buttonReducer from "../features/buttonSelect/buttonSlice";
import PokemonsSlice from "../features/pokemons/pokemonsSlice";


export default configureStore({
    reducer: {
        buttonS: buttonReducer,
        pokemons: PokemonsSlice,
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
        serializableCheck: false,
    })
})