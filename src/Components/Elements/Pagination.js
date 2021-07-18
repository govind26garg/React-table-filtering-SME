import React, { useContext, useState, useEffect } from "react";
import { ContextHook } from "../Hooks/GlobalContextHooks";
import "../CSS/Pagination.css";

const Pagination = () => {
  const {
    tableData,
    currentPage,
    dropDownValue,
    setcurrentPage,
    setitemsPerPage,
    itemsPerPage,
    maxPageNumberLimit,
    setmaxPageNumberLimit,
    minPageNumberLimit,
    setminPageNumberLimit,
    tableLength,
  } = useContext(ContextHook);

  const [pageNumberLimit] = useState(5);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(tableData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  useEffect(() => {
    if (
      dropDownValue === 500 ||
      dropDownValue === 100 ||
      dropDownValue === 50 ||
      dropDownValue === 25
    ) {
      setcurrentPage(1);
      setminPageNumberLimit(0);
      setmaxPageNumberLimit(5);
    }
    setitemsPerPage(dropDownValue);
  }, [dropDownValue]);

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <>
      <ul className="pageNumbers">
        {tableLength ? (
          <></>
        ) : currentPage === pages[0] ? (
          <></>
        ) : (
          <li onClick={handlePrevbtn}>Prev</li>
        )}

        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        {tableLength ? (
          <></>
        ) : currentPage === pages[pages.length - 1] ? (
          <></>
        ) : (
          <li onClick={handleNextbtn}>Next</li>
        )}
      </ul>
    </>
  );
};

export default Pagination;
