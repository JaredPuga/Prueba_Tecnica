import { useSelector, useDispatch } from 'react-redux';
import { changeSelect } from '../features/buttonSelect/buttonSlice';
import styled from 'styled-components'
import TableData from './TableData';
import GridCuadricula from './GridCuadricula';


const Titulo = styled.h1`
    color: #000000;
    font-family: 'Pokemon Solid', sans-serif;
    font-size: 60px;
    margin: 0;
    letter-spacing: 6px;
`;

const GridPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 70px;
    margin-top: 0;
`;

const GridButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const Search = styled.input`
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

const SecondGrid = styled.div`
    display: flex;
    flex-direction: row;
`;

const ViewButton = styled.button`
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

const ViewButtonC = styled.button`
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

const Logo = styled.img`
    width: 80px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export default function Home() {
    const Selected = useSelector(store => store.buttonS)
    const dispatch = useDispatch()

  return (
    <GridPrincipal>
        <Header>
            <Titulo>Pokédex</Titulo>
            <Logo src='/pokebola.png' />
        </Header>
        <GridButtons>
            <Search 
                type='text'
                placeholder='Buscar Pokémon'
            />
            <SecondGrid>
                <ViewButton
                    onClick={() => {
                        dispatch(changeSelect('Lista'))
                    }}
                    selected = {Selected.value}
                    >Lista</ViewButton>
                <ViewButtonC 
                    onClick={() => {
                        dispatch(changeSelect('Cuadrícula'))
                    }}
                    selected = {Selected.value}
                >Cuadrícula</ViewButtonC>
            </SecondGrid>
        </GridButtons>

        {
            Selected.value === 'Lista' ? 
                <TableData /> : Selected.value === 'Cuadrícula' && <GridCuadricula /> 
        }
    </GridPrincipal>
  )
}
