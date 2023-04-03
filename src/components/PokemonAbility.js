import { CapWord } from "../helpers/CapWord";
import {
  DescriptionAbility,
  DivAbility,
  TitleAbility,
} from "../styles/styledPokemonAbilities";

export default function PokemonAbility({ ability }) {
  const text = ability.flavor_text_entries.find(
    (desc) => desc.language.name === "es"
  );

  return (
    <DivAbility>
      <TitleAbility>
        {CapWord(ability.name)}:{" "}
        <DescriptionAbility>{text.flavor_text}</DescriptionAbility>
      </TitleAbility>
    </DivAbility>
  );
}
