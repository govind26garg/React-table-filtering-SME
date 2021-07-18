import React, { useContext } from "react";
import { ContextHook } from "../Hooks/GlobalContextHooks";
import "../CSS/DropDown.css";

const DropDown = () => {
  const { setdropDownValue } = useContext(ContextHook);

  return (
    <div className="contain">
      <div className="select-box">
        <select onChange={(e) => setdropDownValue(parseInt(e.target.value))}>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={500}>500</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
