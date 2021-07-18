import React, { useContext } from "react";
import { ContextHook } from "../Hooks/GlobalContextHooks";
import "../CSS/Search.css";

const Search = () => {
  const { setsearchValue } = useContext(ContextHook);

  return (
    <>
      <form className="example">
        <input
          type="text"
          placeholder="Search Here.."
          onChange={(e) => setsearchValue(e.target.value)}
          autoComplete="off"
          name="search"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default Search;
