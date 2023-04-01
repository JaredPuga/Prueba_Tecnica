import styled from 'styled-components';


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #cccccc;
    text-align: center;
  }

  th {
    font-weight: bold;
    background-color: #f2f2f2;
    padding: 25px;
  }

  td:last-child {
    width: 100px;
  }

  @media (max-width: 768px) {
    td:last-child {
      display: none;
    }
  }
`;

const TableHeadCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #cccccc;
  font-weight: bold;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #cccccc;

  &:last-child {
    width: 100px;
  }
`;


export default function TableData() {
    const data = [    { id: 1, name: 'Bulbasaur', preview: 'https://pokeapi.co/api/v2/pokemon/1', types: ['Grass', 'Poison'], abilities: ['Overgrow'] },
    { id: 2, name: 'Charmander', preview: 'https://pokeapi.co/api/v2/pokemon/4', types: ['Fire'], abilities: ['Blaze'] },
    { id: 3, name: 'Squirtle', preview: 'https://pokeapi.co/api/v2/pokemon/7', types: ['Water'], abilities: ['Torrent'] },
    // ...
  ];

  return (

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
          {data.map((item) => (
            <tr key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.preview}</TableCell>
              <TableCell>{item.types.join(', ')}</TableCell>
              <TableCell>{item.abilities.join(', ')}</TableCell>
              <TableCell></TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
  );
}

