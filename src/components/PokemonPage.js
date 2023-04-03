import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { showPokemonID } from "../features/pokemons/pokemonActions"
import { CapWord } from "../helpers/CapWord"
import { RedBackground } from "../styles/styledComponents"
import { AbilitiesPokemon, Button, Columna1, Columna2, Container, ContainerPrincipal, GridContainer, ImagenSprite, LeftArrow, MovesPokemon, NamePokemon, RightArrow } from "../styles/styledPokemonPage"
import Loading from "./Loading"

export default function PokemonPage() {

  const { dataPokemon, errorPokemon, successPokemon, loadingPokemon } = useSelector(state => state.pokemon)
  const [pokemonData, setPokemonData] = useState({}) 
  const [imagenActual, setImagenActual] = useState(0)
  const { id } = useParams()
  const dispatch = useDispatch()

  const imagenes = [
    pokemonData.sprites?.other['official-artwork'].front_shiny, 
    pokemonData.sprites?.other.home.front_shiny,
    pokemonData.sprites?.front_shiny,
    pokemonData.sprites?.back_shiny,
    pokemonData.sprites?.other.home.front_default,
    pokemonData.sprites?.other.dream_world.front_default,
  ]
  
  useEffect(() => {
    setPokemonData({})
    dispatch(showPokemonID(id))
  }, [dispatch, id])

  useEffect(() => {
    if(successPokemon) {
      setPokemonData({})
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
      {loadingPokemon && successPokemon ? (
        <Loading />
      ) : (
        <ContainerPrincipal>
          <Container>
            <LeftArrow
              onClick={() =>
                setImagenActual(
                  imagenActual === 0 ? imagenes.length - 1 : imagenActual - 1
                )
              }
            >
              &#10094;
            </LeftArrow>
            <RedBackground height={50} />
            <ImagenSprite
              src={imagenes[imagenActual]}
              alt={`imagen de ${pokemonData.name}`}
            />

            <RightArrow
              onClick={() =>
                setImagenActual(
                  imagenActual === imagenes.length - 1 ? 0 : imagenActual + 1
                )
              }
            >
              &#10095;
            </RightArrow>
          </Container>

          <GridContainer>
            <Columna1>
              <NamePokemon>{pokemonData.name && <h1>{CapWord(pokemonData.name)}</h1>}</NamePokemon>
              <AbilitiesPokemon>Elemento 2</AbilitiesPokemon>
            </Columna1>
            <Columna2>
              <MovesPokemon>Elemento 3</MovesPokemon>
            </Columna2>
          </GridContainer>

          <Link to={"/inicio"}>
            <Button onClick={() => setPokemonData({})}>Regresar</Button>
          </Link>
        </ContainerPrincipal>
      )}
    </>
  );
}