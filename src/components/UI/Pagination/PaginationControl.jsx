import { useState } from "react";
import style from "../../../pages/Collections/collection.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
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
      <button
        className={cx("btn_pagination", { hiddenPage: currentPage === 1 })}
        onClick={() => gotoPages(currentPage - 1)}
      >
        <i class="bx bx-left-arrow-alt"></i>
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => gotoPages(page)}
          className={cx("page", { activePage: page === currentPage })}
        >
          {page}
        </button>
      ))}
      <button
        className={cx("btn_pagination", {
          hiddenPage: currentPage === totalPages,
        })}
        onClick={() => gotoPages(currentPage + 1)}
      >
        <i class="bx bx-right-arrow-alt"></i>
      </button>
    </div>
  );
}
export default PaginationControl;
