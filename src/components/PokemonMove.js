import styled from "styled-components"
import { CapWord } from "../helpers/CapWord";
import { TypeColor } from "../styles/styledComponents";

const MoveTite = styled.h3`
    font-weight: bold;
`;

const DivDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    gap: 8px;
    border-bottom: 1px solid;

    p {
        margin: 0;
    }
`;

const DivChildren = styled.div`
    display: flex;
    flex-direction: column;
`;

const MoveDescription = styled.p`
    color: #C3BCBB;
    font-weight: bold;
`;

const MoveValue = styled.p`
    color: #C3BCBB;
    font-weight: bold;
`;

export default function PokemonMove({move}) {
  return (
    <>
        <MoveTite>{CapWord(move.name)}</MoveTite>
        <DivDescription>
            <DivChildren>
                <MoveDescription>Poder</MoveDescription>
                <MoveValue>{move.power === null ? '-' : move.power}</MoveValue>
            </DivChildren>
            <DivChildren>
                <MoveDescription>Precisión</MoveDescription>
                <MoveValue>{move.pp === null ? '-' : move.pp}</MoveValue>
            </DivChildren>
            <DivChildren>
                <MoveDescription>Tipo</MoveDescription>
                <TypeColor color={CapWord(move.type.name)}>{CapWord(move.type.name)}</TypeColor>
            </DivChildren>
        </DivDescription>
    </>
  )
}
