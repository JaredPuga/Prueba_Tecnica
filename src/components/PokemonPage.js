import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { showAbilities, showMovimientos, showPokemonID } from "../features/pokemons/pokemonActions"
import { CapWord } from "../helpers/CapWord"
import { RedBackground, TypeColor } from "../styles/styledComponents"
import { AbilitiesPokemon, Button, Columna1, Columna2, Container, ContainerPrincipal, GridContainer, ImagenSprite, LeftArrow, MovesPokemon, NamePokemon, RightArrow, DivTypes, Name } from "../styles/styledPokemonPage"
import Loading from "./Loading"
import styled from "styled-components"
import PokemonMove from "./PokemonMove"
import PokemonAbility from "./PokemonAbility"

const DivContenedor = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 25px;
`


export default function PokemonPage() {

  const { dataPokemon, errorPokemon, successPokemon, loadingPokemon } = useSelector(state => state.pokemon)
  const { dataMove, errorMove, successMove, loadingMove } = useSelector(state => state.moves)
  const { dataAbility, errorAbility, successAbility, loadingAbility } = useSelector(state => state.ability)
  const [pokemonData, setPokemonData] = useState({})
  const [pokemonMoves, setPokemonMoves] = useState([])
  const [pokemonAbilities, setPokemonAbilities] = useState([])
  const [imagenActual, setImagenActual] = useState(0)
  const { id } = useParams()
  const dispatch = useDispatch()

  const imagenes = [
    pokemonData.sprites?.other['official-artwork'].front_shiny, 
    pokemonData.sprites?.other.home.front_shiny,
    pokemonData.sprites?.front_shiny,
    pokemonData.sprites?.back_shiny,
    pokemonData.sprites?.other.home.front_default,
  ]
  
  useEffect(() => {
    setPokemonData({})
    dispatch(showPokemonID(id))
    dispatch(showMovimientos(id))
    dispatch(showAbilities(id))
    dispatch(showAbilities(id))
  }, [dispatch, id])

  useEffect(() => {
    if(successPokemon && successMove && successAbility) {
      setPokemonData(dataPokemon)
      setPokemonMoves(dataMove)
      setPokemonAbilities(dataAbility)
    } else {
      setPokemonData({})
      setPokemonMoves([])
    }
    if (errorPokemon) {
      console.log(errorPokemon);
    }
  }, [errorPokemon, successPokemon, dataPokemon, dataMove, successMove, dataAbility,successAbility])

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
              <DivContenedor>
              <NamePokemon>
              {pokemonData.name && <Name>{CapWord(pokemonData.name)}</Name>}
              <DivTypes>
              {pokemonData.types?.map(type => (
                <TypeColor color={CapWord(type.type.name)} key={type.type.name}>{CapWord(type.type.name)}</TypeColor>
            ))}
              </DivTypes>
              </NamePokemon>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo nunc, egestas eget hendrerit in, 
                euismod suscipit quam. Mauris sed iaculis arcu, sit amet finibus risus. Duis pellentesque, tortor et placerat
                lobortis, ligula dolor efficitur justo, sollicitudin vulputate orci sem viverra nibh. Sed iaculis, dolor eget
                condimentum commodo, nibh velit gravida velit, ac consectetur ex ante nec lectus. In id placerat urna.
                Curabitur vulputate, quam ac mollis fringilla, erat mauris pharetra nisi
              </div>
              </DivContenedor>
              <AbilitiesPokemon>
                <Name>Habilidades</Name>
                {
                  pokemonAbilities?.map(ability => (
                    <PokemonAbility key={ability.id} ability={ability} />
                  ))
                }
              </AbilitiesPokemon>
            </Columna1>
            <Columna2>
              <MovesPokemon>
                <Name>Movimientos</Name>
                  {
                    pokemonMoves?.slice(0,10).map(move => (
                      <PokemonMove key={move.id} move={move}/>
                    ))
                  }
              </MovesPokemon>
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