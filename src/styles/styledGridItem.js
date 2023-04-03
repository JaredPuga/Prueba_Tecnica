import styled from "styled-components";

export const CenteredDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 5px;
    border-color: gray;
    padding: 20px;
`;

export const Imagen = styled.img`
    width: 100px;
    align-self: center;
`;

export const TextAbilities = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 2px solid;
    margin-bottom: 15px;
    max-height: auto;
`;

export const Abilities = styled.p`
    margin: 5px;
`;

export const Name = styled.p `
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const TypesText = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;