import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  grid-gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }
`;