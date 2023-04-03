import { useSelector, useDispatch } from 'react-redux';
import { changeSelect } from '../features/buttonSelect/buttonSlice';
import { ContainerDiv, GridButtons, GridPrincipal, Header, Logo, Search, SecondGrid, Titulo, TituloUser, TituloUserName, ViewButton, ViewButtonC } from '../styles/stylesHome';
import TableData from './TableData';
import GridCuadricula from './GridCuadricula';

export default function Home() {
    const Selected = useSelector(store => store.buttonS)
    const dispatch = useDispatch()

  return (
    <GridPrincipal>
        <Header>
            <ContainerDiv>
            <Logo src='/pokebola.png' />
            <Titulo>Pokédex</Titulo>
            </ContainerDiv>
            <TituloUser>Bienvenido,
                <TituloUserName> Jared</TituloUserName>
            </TituloUser>
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