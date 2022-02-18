import React, { useEffect, useState } from "react";

export const Pagination = ({ total, pageLimit, dataLimit, onPageChange }) => {
  const [pages, setPages] = useState(Math.round(total / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    onPageChange(currentPage);
  }, [onPageChange, currentPage]);

  useEffect(() => {
    setPages(Math.round(total / dataLimit));
  }, [dataLimit, pages, total]);

  return (
    <div style={{ float: "right" }}>
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
                className={`page-item paginationItem ${
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
