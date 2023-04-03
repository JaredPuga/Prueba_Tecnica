import styled from "styled-components";

export const Titulo = styled.h1`
    display: flex;
    align-items: center;
    font-family: 'Pokemon Solid', sans-serif;
    font-size: 2rem;
    margin: 0;
    letter-spacing: 6px;

    @media (min-width: 768px) {
        font-size: 4rem;
    }
`;

export const TituloUser = styled.h3`
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const TituloUserName = styled.span`
    color: var(--rojo);
`;

export const GridPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;

    @media (min-width: 768px) {
        margin: 70px;
        margin-top: 0;
    }
`;

export const GridButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const Search = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    font-size: 16px;
    color: #333333;
    border: 2px solid;
    border-color: #757973;
    border-radius: 5px;
    width: 350px;
`;

export const SecondGrid = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ViewButton = styled.button`
    border: none;
    border-radius: 5px;
    width: 120px;
    background-color: ${props => props.selected === 'Lista' ? '#363232' : ''};
    border: 2px solid;
    border-color: #757973;
    color: ${props => props.selected === 'Lista' ? '#FFFFFF' : '#363232'};
    font-weight: bold;
    font-family: 'Poppins', sans-serif;

    &:hover {
        background-color: #201E1E;
        color: #FFFFFF;
        cursor: pointer;
    }
`;

export const ViewButtonC = styled.button`
    border: none;
    border-radius: 5px;
    width: 120px;
    background-color: ${props => props.selected === 'Cuadrícula' ? '#363232' : ''};
    border: 2px solid;
    border-color: #757973;
    color: ${props => props.selected === 'Cuadrícula' ? '#FFFFFF' : '#363232'};
    font-weight: bold;
    margin-left: 5px;
    font-family: 'Poppins', sans-serif;

    &:hover {
        background-color: #201E1E;
        color: #FFFFFF;
        cursor: pointer;
    }
`;

export const Logo = styled.img`
    width: 10%;
    margin-right: 15px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
`