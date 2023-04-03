import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    margin: 70px;
    font-family: 'Poppins', sans-serif;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  border: 4px solid;
  border-radius: 15px;

`;

export const ImagenSprite = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: black;
  cursor: pointer;
  z-index: 1;

  &:hover {
    color: #ccc;
  }
`;

export const RightArrow = styled(Arrow)`
  right: 10px;
`;

export const LeftArrow = styled(Arrow)`
  left: 10px;
`;

export const Button = styled.button`
  background-color: var(--rojo);
  color: #FFFFFF;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  height: auto;
  margin-top: 20px;
`;

export const Columna1 = styled.div`
  background-color: #ccc;
  //display: flex;
  //justify-content: space-between;
`;

export const Columna2 = styled.div`
  background-color: #aaa;

`;

export const NamePokemon = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
`;

export const AbilitiesPokemon = styled.div`
  grid-column: 1/ span 2;
`;

export const MovesPokemon = styled.div`
  grid-column: 1/ span 2;
`