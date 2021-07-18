import React, { useContext } from "react";
import { ContextHook } from "../Hooks/GlobalContextHooks";
import TableList from "./TableList";
import Filter from "./Filter";
import Search from "./Search";
import ButtonMode from "./ButtonMode";
import "../CSS/Table.css";

const TableData = () => {
  const {
    tableData,
    tableLength,
    loading,
    currentPage,
    itemsPerPage,
    setSorting,
  } = useContext(ContextHook);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalData = () => {
    let computedData = tableData;
    return computedData.slice(indexOfFirstItem, indexOfLastItem);
  };

  return (
    <>
      <Search />
      <br />
      <Filter
        indexOfLastItem={indexOfLastItem}
        indexOfFirstItem={indexOfFirstItem}
      />
      <br />
      <ButtonMode />
      <br />
      {loading ? (
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="table_responsive">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>
                  <span style={style}>
                    Name
                    <span className="caret-flex">
                      <i
                        className="fa fa-caret-up"
                        onClick={() =>
                          setSorting({ field: "name", order: "desc" })
                        }
                      ></i>
                      <i
                        className="fa fa-caret-down"
                        onClick={() =>
                          setSorting({ field: "name", order: "asc" })
                        }
                      ></i>
                    </span>
                  </span>
                </th>
                <th>
                  <span style={style}>
                    Email
                    <span className="caret-flex">
                      <i
                        className="fa fa-caret-up"
                        onClick={() =>
                          setSorting({ field: "email", order: "desc" })
                        }
                      ></i>
                      <i
                        className="fa fa-caret-down"
                        onClick={() =>
                          setSorting({ field: "email", order: "asc" })
                        }
                      ></i>
                    </span>
                  </span>
                </th>
                <th>Body</th>
              </tr>
            </thead>

            <tbody>
              {tableLength ? (
                <tr>
                  <td colSpan="5"> No Data Found of this result</td>
                </tr>
              ) : (
                totalData().map((ele) => <TableList ele={ele} key={ele.id} />)
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TableData;
