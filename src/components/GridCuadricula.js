import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Cada columna tendrá un ancho mínimo de 200px y se ajustará automáticamente para llenar el contenedor */
  grid-gap: 16px; 
`;

const GridItem = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

export default function GridCuadricula() {
  return (
    <GridContainer>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 5</GridItem>
    </GridContainer>
  )
}
