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
  padding: 15px;
  font-weight: bold;
  margin-top: 15px;
  &:hover {
    background-color: #201E1E;
    cursor: pointer;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  height: auto;
  margin-top: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Columna1 = styled.div`
  grid-column: 1;

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

export const Columna2 = styled.div`
  border: 1px solid;
  padding: 25px;
`;

export const NamePokemon = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
`;

export const AbilitiesPokemon = styled.div`
  grid-column: 1;
  padding: 25px;
  border: 1px solid;
  margin-top: 15px;
`;

export const MovesPokemon = styled.div`
  grid-column: 1;
`

export const DivTypes = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Name = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 100;
  color: #E3A231;
  
  @media (min-width: 768px) {
    font-size: 45px;
  }
`;

export const DivContenedor = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 25px;
`