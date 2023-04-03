import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { changeSelect } from '../features/buttonSelect/buttonSlice';
import { ContainerDiv, GridButtons, GridPrincipal, Header, Logo, Search, SecondGrid, Titulo, TituloUser, TituloUserName, ViewButton, ViewButtonC } from '../styles/stylesHome';
import TableData from './TableData';
import GridCuadricula from './GridCuadricula';
import { Button } from '../styles/styledComponents';
import { changeAuth } from '../features/auth/authSlice';

export default function Home() {
    const Selected = useSelector(store => store.buttonS)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const value = localStorage.getItem('isAuth')
        if (!value) {
          localStorage.setItem('isAuth', false)
        }
    }, [])

    if (auth.value === 'false') {
        return <Navigate to={'/'}/>
    }
    

    const handleLogOut = () => {
        dispatch(changeAuth(true))
        localStorage.setItem('isAuth', false)
    }

  return (
    <GridPrincipal>
        <Header>
            <ContainerDiv>
            <Logo src='/pokebola.png' />
            <Titulo>Pokédex</Titulo>
            </ContainerDiv>
            <TituloUser>Bienvenido,
                <TituloUserName> {auth.name}</TituloUserName>
                <Link to={'/'}><Button onClick={handleLogOut}>Salir</Button></Link>
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