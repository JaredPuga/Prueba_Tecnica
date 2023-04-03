import { CapWord, returnElement } from "../helpers";
import { Link } from "react-router-dom";
import { Button, RedBackground, TypeColor } from "../styles/styledComponents";
import {
  Abilities,
  ButtonContainer,
  CenteredDiv,
  Imagen,
  Name,
  TextAbilities,
  TypesText,
} from "../styles/styledGridItem";

export default function GridItem({ pokemon }) {
  return (
    <CenteredDiv>
      <RedBackground height={25} />
      <Imagen
        src={pokemon.sprites.other.home.front_default}
        alt={`imagen de ${pokemon.name}`}
      />
      <Name>{`${CapWord(pokemon.name)} ${returnElement(
        pokemon.types[0].type.name
      )}`}</Name>
      <TextAbilities>
        {pokemon.abilities.map((ability) => (
          <Abilities key={ability.ability.name}>
            {CapWord(ability.ability.name)}
          </Abilities>
        ))}
      </TextAbilities>
      <ButtonContainer>
        <TypesText>
          {pokemon.types.map((type) => (
            <TypeColor color={CapWord(type.type.name)} key={type.type.name}>
              {CapWord(type.type.name)}
            </TypeColor>
          ))}
        </TypesText>
        <Link to={`/pokemon/${pokemon.id}`}>
          <Button>Shiny</Button>
        </Link>
      </ButtonContainer>
    </CenteredDiv>
  );
}
