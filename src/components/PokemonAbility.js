import styled from "styled-components";
import { CapWord } from "../helpers/CapWord";

const TitleAbility = styled.h1`
    font-size: 20px;   
`;

const DescriptionAbility = styled.p`
    font-weight: 300;
    font-size: 15px;
    margin: 0;
`;

const DivAbility = styled.div `
    display: flex;
    border-bottom: 1px solid;
`;

export default function PokemonAbility({ability}) {

    const text = ability.flavor_text_entries.find(desc => desc.language.name === 'es')

  return (
    <DivAbility>
        <TitleAbility>{CapWord(ability.name)}: <DescriptionAbility>{text.flavor_text}</DescriptionAbility></TitleAbility>
    </DivAbility>
  )
}
