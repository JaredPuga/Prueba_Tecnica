import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAllPokemons } from "../features/pokemons/pokemonActions";
import { GridContainer } from "../styles/stylesGridCuadricula";
import Loading from "./Loading";
import GridItem from "./GridItem";

export default function GridCuadricula() {

  const { data, error, success, loading } = useSelector(state => state.pokemons)

  const dispatch = useDispatch()
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(15)
  const page = 1

  useEffect(() => {
    dispatch(showAllPokemons({page ,limit}))
  }, [dispatch, limit])
  

  useEffect(() => {
    if(success) {
      setPokemons(data)
    } else {
      setPokemons([])
    }
    
    if (error) {
      console.log(error);
    }

  }, [error, success, data])

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setLimit(prev => prev + 10 )
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  
  return (
        <>
              <GridContainer>
                { 
                  pokemons.map(poke => (
                      <GridItem key={poke.id} pokemon={poke}/>
                  ))
                }
              </GridContainer>
              {
                loading && <Loading />
              }
        </>
  )
}