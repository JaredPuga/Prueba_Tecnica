import { CapWord } from "../helpers/CapWord";
import { Link } from "react-router-dom";
import { Button, TypeColor } from "../styles/styledComponents";
import { Imagen, TableCell, Title } from "../styles/styledPokeCell";

export default function PokeCell({pokemon}) {

  return (
    <>
    <TableCell>{pokemon.id}</TableCell>
    <TableCell><Title>{CapWord(pokemon.name)}</Title></TableCell>
    <TableCell><Imagen src={pokemon.sprites.other.dream_world.front_default} alt={`imagen ${pokemon.name}`} /></TableCell>
    <TableCell>{pokemon.types.map(type => (
        <TypeColor color={CapWord(type.type.name)} key={type.type.name}>{CapWord(type.type.name)}</TypeColor>
    ))}</TableCell>
    <TableCell>{pokemon.abilities.map(ability => (
        <p key={ability.ability.name}>{CapWord(ability.ability.name)}</p>
    ))}</TableCell>
    <TableCell><Link to={`/pokemon/${pokemon.id}`}><Button>Shiny</Button></Link></TableCell>
    </>
  )
}
