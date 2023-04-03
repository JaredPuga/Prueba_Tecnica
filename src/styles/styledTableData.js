import styled from "styled-components";

export const Table = styled.table`
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
    background-color: var(--rojo);
    padding: 25px;
    border-bottom: 3px solid;
    border-color: black;
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

export const TableHeadCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #cccccc;
  font-weight: bold;
  background-color: #f2f2f2;
  color: #FFFFFF;
`;