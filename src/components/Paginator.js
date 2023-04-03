import {
  Pagination,
  PrevButton,
  PageButton,
  NextButton,
} from "../styles/styledPaginator";

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
  );
}
