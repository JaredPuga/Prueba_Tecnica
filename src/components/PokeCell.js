import styled from "styled-components";
import { CapWord } from "../helpers/CapWord";
import { Link } from "react-router-dom";


const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #cccccc;
  
  &:last-child {
    width: 100px;
  }
`;

const Imagen = styled.img`
    width: 100px;
`

const Button = styled.button`
    background: #363232;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 15px;
    border-radius: 5px;
    padding: 10px;

    &:hover {
        cursor: pointer;
        background: #000000;
    }
`

const TypeColor = styled.p`
  color: ${props => props.color === 'Grass' ? '#78C850' : 
                    props.color === 'Fire' ? '#F05030' : 
                    props.color === 'Poison' ? '#B058A0' : 
                    props.color === 'Water' ? '#3899F8' :
                    props.color === 'Electric' ? '#F8D030' :
                    props.color === 'Ground' ? '#E9D6A4' :
                    props.color === 'Fighting' ? '#EB8E52' :
                    props.color === 'Psychic' ? '#F870A0' : 
                    props.color === 'Flying' ? '#98A8F0' : 
                    props.color === 'Ice' ? '#58C8E0' : 
                    props.color === 'Bug' ? '#A8B820' : 
                    props.color === 'Steel' ? '#A8A8C0' : 
                    props.color === 'Dragon' ? '#7860E0' : 
                    props.color === 'Ghost' ? '#6060B0' : 
                    props.color === 'Fairy' ? '#E79FE7' :
                    props.color === 'Fighting' ? '#A05038' : 
                    props.color === 'Rock' ? '#A05038' : ''
                    };
  font-weight: bold;
`;

const Title = styled.p`
  font-weight: bold;
`;


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
