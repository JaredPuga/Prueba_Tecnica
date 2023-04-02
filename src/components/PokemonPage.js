import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { showPokemonID } from "../features/pokemons/pokemonActions"
import Loading from "./Loading"
import styled from "styled-components"


const Imagen = styled.img`
    width: 350px;
    align-self: center;
`;

export default function PokemonPage() {

  const { dataPokemon, errorPokemon, successPokemon, loadingPokemon } = useSelector(state => state.pokemon)
  const [pokemonData, setPokemonData] = useState({}) 
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showPokemonID(id))
  }, [dispatch, id])

  useEffect(() => {
    if(successPokemon) {
      setPokemonData(dataPokemon)
    } else {
      setPokemonData({})
    }
    if (errorPokemon) {
      console.log(errorPokemon);
    }
  }, [errorPokemon, successPokemon, dataPokemon])
  
  return (
    <>
      {
        loadingPokemon ? <Loading /> : (
          <>
            <h1>{pokemonData.name}</h1>
            <Imagen src={pokemonData.sprites?.other.home.front_default} alt={`imagen de ${pokemonData.name}`}/>
            <Link to={'/inicio'}><button>Regresar</button></Link>
          </>
        )
      }
    </>
  )
}