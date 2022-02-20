import React, { useEffect, useState } from "react";
import "./Pagination.styles.scss";

export const Pagination = ({
  totalPages,
  pageLimit,
  onPageChange,
  currentAtPage
}) => {
  const [pages, setPages] = useState(totalPages);
  const [currentPage, setCurrentPage] = useState(currentAtPage);
  const [isChangePage, setIsChangePage] = useState(false);
  const goToNextPage = () => {
    setIsChangePage(true);
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setIsChangePage(true);
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    setIsChangePage(true);
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    if (isChangePage) {
      onPageChange(currentPage);
      setIsChangePage(false);
    }
  }, [onPageChange, currentPage, isChangePage]);

  useEffect(() => {
    setPages(totalPages);
  }, [totalPages]);

  useEffect(() => {
    setCurrentPage(currentAtPage);
  }, [currentAtPage]);

  return (
    <div className="pagination-custom">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className={`page-item prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            <button className="page-link" onClick={goToPreviousPage}>
              Previous
            </button>
          </li>
          {getPaginationGroup().map((item, index) => {
            if (pages < item) return null;
            return (
              <li
                className={`page-item ${
                  currentPage === item ? "active" : null
                }`}
                key={index}
              >
                <button className="page-link" onClick={changePage}>
                  {item}
                </button>
              </li>
            );
          })}
          <li
            className={`page-item ${currentPage === pages ? "disabled" : ""}`}
          >
            <button className="page-link" onClick={goToNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
