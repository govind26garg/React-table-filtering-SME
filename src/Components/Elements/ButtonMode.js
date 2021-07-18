import React, { useContext } from "react";
import "../CSS/ButtonMode.css";
import { ContextHook } from "../Hooks/GlobalContextHooks";

const ButtonMode = () => {
  const { editMode, showAllBtn, viewMode, cancelAll } = useContext(ContextHook);
  return (
    <div className="flex">
      <button className="btn edit" onClick={editMode}>
        Edit Mode
      </button>
      {showAllBtn ? (
        <>
          <button className="btn view" onClick={viewMode}>
            View Mode
          </button>
          <button className="btn cancel" onClick={cancelAll}>
            Cancel
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ButtonMode;
