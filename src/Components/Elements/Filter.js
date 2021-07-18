import React, { useContext } from "react";
import Pagination from "./Pagination";
import DropDown from "./DropDown";
import { ContextHook } from "../Hooks/GlobalContextHooks";
import "../CSS/ButtonMode.css";

const Filter = (props) => {
  const { indexOfFirstItem, indexOfLastItem } = props;
  const { tableLength } = useContext(ContextHook);
  return (
    <div className="flex">
      <Pagination />
      <DropDown />
      <div>
        <p>
          {tableLength ? (
            <></>
          ) : (
            `${indexOfFirstItem}-${indexOfLastItem} of 500`
          )}
        </p>
      </div>
    </div>
  );
};

export default Filter;
