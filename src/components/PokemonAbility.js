import { CapWord } from "../helpers/CapWord";

export default function PokemonAbility({ability}) {
  return (
    <>
        <h1>{CapWord(ability.name)}</h1>
        <h3>{ability.flavor_text_entries[13].flavor_text}</h3>
    </>
  )
}
