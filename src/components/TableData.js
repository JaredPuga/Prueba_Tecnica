import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showAllPokemons } from '../features/pokemons/pokemonActions';
import Loading from './Loading';
import PokeCell from './PokeCell';
import Paginator from './Paginator';
import { Table, TableHeadCell } from '../styles/styledTableData';


export default function TableData() {

  const { data, error, success, loading } = useSelector(state => state.pokemons) 
  
  const dispatch = useDispatch()

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)
  const limit = 5
  
  useEffect(() => {
    dispatch(showAllPokemons({page, limit}))
  }, [dispatch, page])
  

  useEffect(() => {
    
    if(success) {
      setPokemons(data)
    } else {
      setPokemons([])
    }
    
    if (error) {
      console.log(error);
    }

  }, [error, success, data])


  return (
    <>
      {
        loading ? (<Loading />) : (
        <>
          <Table>
          <thead>
            <tr>
              <TableHeadCell>#</TableHeadCell>
              <TableHeadCell>Nombre</TableHeadCell>
              <TableHeadCell>Vista Previa</TableHeadCell>
              <TableHeadCell>Tipos</TableHeadCell>
              <TableHeadCell>Habilidades</TableHeadCell>
              <TableHeadCell></TableHeadCell>
            </tr>
          </thead>
          <tbody>
            { 
                pokemons.length > 0 && pokemons.map(poke => (
                  <tr key={poke.id}>
                    <PokeCell pokemon={poke} />
                  </tr>
                ))
            }
          </tbody>
        </Table>
        
        <Paginator totalPages={255} currentPage={page} onPageChange={setPage} />
        </>
      )
    }
  </>
  );
}

