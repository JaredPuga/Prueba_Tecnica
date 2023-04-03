import { Button, PageNumber, PaginatorWrapper } from "../styles/styledPaginator";

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
