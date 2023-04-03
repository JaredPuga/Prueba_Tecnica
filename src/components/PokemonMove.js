import { CapWord } from "../helpers/CapWord";
import { TypeColor } from "../styles/styledComponents";
import {
  DivChildren,
  DivDescription,
  MoveDescription,
  MoveTite,
  MoveValue,
} from "../styles/styledPokemonMove";

export default function PokemonMove({ move }) {
  return (
    <>
      <MoveTite>{CapWord(move.name)}</MoveTite>
      <DivDescription>
        <DivChildren>
          <MoveDescription>Poder</MoveDescription>
          <MoveValue>{move.power === null ? "-" : move.power}</MoveValue>
        </DivChildren>
        <DivChildren>
          <MoveDescription>Precisión</MoveDescription>
          <MoveValue>{move.pp === null ? "-" : move.pp}</MoveValue>
        </DivChildren>
        <DivChildren>
          <MoveDescription>Tipo</MoveDescription>
          <TypeColor color={CapWord(move.type.name)}>
            {CapWord(move.type.name)}
          </TypeColor>
        </DivChildren>
      </DivDescription>
    </>
  );
}
