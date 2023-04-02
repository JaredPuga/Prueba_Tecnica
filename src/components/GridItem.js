import styled from 'styled-components'
import { CapWord } from '../helpers/CapWord';
import { Link } from 'react-router-dom';

const CenteredDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 5px;
    border-color: gray;
    padding: 20px;
`;

const Imagen = styled.img`
    width: 100px;
    align-self: center;
`;

const Button = styled.button`
    background: #363232;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 13px;
    border-radius: 5px;
    padding: 0;
    height: 4vh;
    width: 70px;
    &:hover {
        cursor: pointer;
        background: #000000;
    }
`;

const TextAbilities = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 2px solid;
    margin-bottom: 15px;
    max-height: auto;
`;

const Abilities = styled.p`
    margin: 5px;
`;

const Name = styled.p `
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

const TypesText = styled.div`
    display: flex;
    flex-direction: row;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 27%;
  border-bottom: 3px solid;
  background-color: var(--rojo);
  z-index: -1;
`;

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
  margin: 5px;
  font-size: 16px;
`;

const returnElement = (elemnt) => {

    var e = ''

    switch (elemnt) {
        case 'grass':
            e = '🍃';
            break;
        case 'water':
            e = '💧'
            break;
        case 'fire':
            e = '🔥'
            break;
        case 'dragon':
            e = '🐉'
            break;
        case 'ghost':
            e = '👻'
            break;
        case 'bug':
            e = '🐛'
            break;
        case 'electric':
            e = '⚡'
            break;
        case 'fighting':
            e = '💪'
            break;
        case 'psychic':
            e = '🧠'
            break;
        default:
            break;
    }
    return e
}

export default function GridItem({pokemon}) {

  return (
    <CenteredDiv>
        <RedBackground />
        <Imagen src={pokemon.sprites.other.home.front_default} alt={`imagen de ${pokemon.name}`}/>
        <p>{}</p>
        <Name>{`${CapWord(pokemon.name)} ${returnElement(pokemon.types[0].type.name)}`}</Name>
        <TextAbilities>{pokemon.abilities.map(ability => (
            <Abilities key={ability.ability.name}>{CapWord(ability.ability.name)}</Abilities>
        ))}</TextAbilities>
        <ButtonContainer>
            <TypesText>
            {pokemon.types.map(type => (
                <TypeColor color={CapWord(type.type.name)}  key={type.type.name}>{CapWord(type.type.name)}</TypeColor>
            ))}
            </TypesText>
            <Link to={`/pokemon/${pokemon.id}`}>
                <Button>Shiny</Button>
            </Link>
        </ButtonContainer>
    </CenteredDiv>
  )
}
