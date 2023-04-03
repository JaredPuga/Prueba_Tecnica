import styled from "styled-components";
import { Button, PageNumber, PaginatorWrapper } from "../styles/styledPaginator";

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;


const PageButton = styled.button`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;


const PrevButton = styled(PageButton)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;


const NextButton = styled(PageButton)`
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;




export default function Paginator({ currentPage, totalPages, onPageChange }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  let pages = [];
  let startPage = 1;
  let endPage = totalPages;
  const maxPages = 5;

  if (totalPages > maxPages) {
    const middle = Math.ceil(maxPages / 2);
    if (currentPage <= middle) {
      endPage = maxPages;
    } else if (currentPage >= totalPages - middle) {
      startPage = totalPages - maxPages + 1;
    } else {
      startPage = currentPage - middle + 1;
      endPage = currentPage + middle - 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Pagination>
      <PrevButton onClick={handlePrevClick} disabled={isFirstPage}>
        &lt;
      </PrevButton>
      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
      <NextButton onClick={handleNextClick} disabled={isLastPage}>
      &gt;
    </NextButton>
  </Pagination>
  )  
}
