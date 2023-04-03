import styled from "styled-components";

export const MoveTite = styled.h3`
    font-weight: bold;
`;

export const DivDescription = styled.div`
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

export const DivChildren = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MoveDescription = styled.p`
    color: #C3BCBB;
    font-weight: bold;
`;

export const MoveValue = styled.p`
    color: #C3BCBB;
    font-weight: bold;
`;