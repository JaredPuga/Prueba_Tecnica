import { useSelector, useDispatch } from 'react-redux';
import { changeSelect } from '../features/buttonSelect/buttonSlice';
import styled from 'styled-components'
import TableData from './TableData';
import GridCuadricula from './GridCuadricula';


const Titulo = styled.h1`
    color: #5B6356;
`;

const GridPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 70px;
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
    background-color: ${props => props.selected === 'Lista' ? '#757973' : ''};
    border: 2px solid;
    border-color: #757973;
    color: ${props => props.selected === 'Lista' ? '#FFFFFF' : '#757973'};
    font-weight: 700;


    &:hover {
        background-color: #757973;
        color: #FFFFFF;
        cursor: pointer;
    }
`;

const ViewButtonC = styled.button`
    border: none;
    border-radius: 5px;
    width: 120px;
    background-color: ${props => props.selected === 'Cuadrícula' ? '#757973' : ''};
    border: 2px solid;
    border-color: #757973;
    color: ${props => props.selected === 'Cuadrícula' ? '#FFFFFF' : '#757973'};
    font-weight: 700;

    &:hover {
        background-color: #757973;
        color: #FFFFFF;
        cursor: pointer;
    }
`;



export default function Home() {
    const Selected = useSelector(store => store.buttonS)
    const dispatch = useDispatch()

  return (
    <GridPrincipal>
        <Titulo>Pokédex</Titulo>
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
