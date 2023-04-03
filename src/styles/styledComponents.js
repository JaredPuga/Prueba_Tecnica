import styled from "styled-components";

export const Button = styled.button`
    background: #363232;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 13px;
    border-radius: 5px;
    padding: 0;
    height: 4vh;
    width: 70px;
    &:hover {
        cursor: pointer;
        background: #000000;
    }
`;

export const TypeColor = styled.p`
  color: ${props => props.color === 'Grass' ? '#78C850' : 
                    props.color === 'Fire' ? '#F05030' : 
                    props.color === 'Poison' ? '#B058A0' : 
                    props.color === 'Water' ? '#3899F8' :
                    props.color === 'Electric' ? '#F8D030' :
                    props.color === 'Ground' ? '#E9D6A4' :
                    props.color === 'Fighting' ? '#EB8E52' :
                    props.color === 'Psychic' ? '#F870A0' : 
                    props.color === 'Flying' ? '#98A8F0' : 
                    props.color === 'Ice' ? '#58C8E0' : 
                    props.color === 'Bug' ? '#A8B820' : 
                    props.color === 'Steel' ? '#A8A8C0' : 
                    props.color === 'Dragon' ? '#7860E0' : 
                    props.color === 'Ghost' ? '#6060B0' : 
                    props.color === 'Fairy' ? '#E79FE7' :
                    props.color === 'Fighting' ? '#A05038' : 
                    props.color === 'Rock' ? '#A05038' : ''
                    };
  font-weight: bold;
`;

export const RedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.height}%;
  border-bottom: 3px solid;
  background-color: var(--rojo);
  z-index: -1;
`;