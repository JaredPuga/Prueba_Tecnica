import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const showAllPokemons = createAsyncThunk("pokemons/showAll", async({page = 5, limit}, thunkAPI) => {
    var offset = (page - 1) * limit;

    if (limit === 100000) {
        offset = 0
    }

    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

        const promises = data.results.map(async(pokemon) => {
            const res = await axios.get(pokemon.url)
            const respuesta = res.data
            return respuesta
        })

        const results = await Promise.all(promises)
        
        return results
    } catch (error) {
        const mensaje = (error.response && error.response.data) || error.message;

        //Envia el mensaje de error como el payload
        return thunkAPI.rejectWithValue(mensaje)
    }
})

export const showPokemonID = createAsyncThunk("pokemons/showAll", async(id, thunkAPI) => {

    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        return data

    } catch (error) {
        const mensaje = (error.response && error.response.data) || error.message;

        //Envia el mensaje de error como el payload
        return thunkAPI.rejectWithValue(mensaje)
    }
})

