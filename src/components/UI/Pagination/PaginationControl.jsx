import { useState, useEffect } from "react";

function PaginationControl({ totalItems, itemsPerPage, onPageChange }) {
  const currentPageFromURL =
    parseInt(new URLSearchParams(window.location.search).get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(currentPageFromURL);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const gotoPages = (page) => {
    if (page >= 1 && page <= totalPages) {
      window.history.pushState({}, "", `?page=${page}`);
      setCurrentPage(page);
      onPageChange(page); // Call the onPageChange callback to update the parent component
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={() => gotoPages(currentPage - 1)}>pre</button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => gotoPages(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button onClick={() => gotoPages(currentPage + 1)}>next</button>
    </div>
  );
}

export default PaginationControl;
