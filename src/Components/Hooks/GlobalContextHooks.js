import React, { createContext, useState, useEffect } from "react";

export const ContextHook = createContext();

export const ContextProvider = ({ children }) => {
  const [tableData, settableData] = useState([]);
  const [resultData, setresultData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [loading, setloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState();
  const [dropDownValue, setdropDownValue] = useState(25);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [isInEditMode, setisInEditMode] = useState(false);
  const [showAllBtn, setshowAllBtn] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/comments";

  const tableLength = tableData.length === 0;

  const viewMode = () => {
    setisInEditMode(false);
    setshowAllBtn(false);
  };

  const editMode = () => {
    setisInEditMode(true);
    setshowAllBtn(true);
  };

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setloading(false);
    settableData(data);
    setresultData(data);
  };
  useEffect(() => {
    setloading(true);
    getData();
  }, []);

  const cancelAll = () => {
    setisInEditMode(false);
    setshowAllBtn(false);
    setloading(true);
    getData();
  };

  useEffect(() => {
    if (searchValue != null) {
      let searchData = resultData.filter((ele) => {
        return (
          ele.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          ele.email.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      settableData(searchData);
      setmaxPageNumberLimit(5);
      setcurrentPage(1);
      setminPageNumberLimit(0);
    }
  }, [searchValue, resultData]);
  useEffect(() => {
    if (sorting.field) {
      let sortedData = [...tableData];
      const reversed = sorting.order === "asc" ? 1 : -1;
      sortedData = sortedData.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
      settableData(sortedData);
    }
  }, [sorting]);

  return (
    <ContextHook.Provider
      value={{
        tableData,
        resultData,
        currentPage,
        itemsPerPage,
        dropDownValue,
        isInEditMode,
        loading,
        tableLength,
        maxPageNumberLimit,
        minPageNumberLimit,
        showAllBtn,
        setcurrentPage,
        setitemsPerPage,
        setdropDownValue,
        setisInEditMode,
        settableData,
        setSorting,
        setsearchValue,
        setmaxPageNumberLimit,
        setminPageNumberLimit,
        viewMode,
        editMode,
        cancelAll,
      }}
    >
      {children}
    </ContextHook.Provider>
  );
};
