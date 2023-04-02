import styled from "styled-components";

const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
  padding: 5px 10px;
`;

const PageNumber = styled.span`
  font-size: 16px;
  margin: 0 10px;
`;

export default function Paginator({ currentPage, totalPages, onPageChange }) {
    const handlePrevPage = () => {
        onPageChange(currentPage - 1);
      };
    
      const handleNextPage = () => {
        onPageChange(currentPage + 1);
      };
    
      return (
        <PaginatorWrapper>
          <Button disabled={currentPage === 1} onClick={handlePrevPage}>
            &lt;
          </Button>
          <PageNumber>{currentPage}</PageNumber>
          <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
            &gt;
          </Button>
        </PaginatorWrapper>
      );
}
