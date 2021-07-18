import React, { useContext, useRef, useState } from "react";
import { ContextHook } from "../Hooks/GlobalContextHooks";
import "../CSS/TableList.css";

const TableList = (props) => {
  const { id, name, email, body } = props.ele;
  const { isInEditMode, tableData, settableData } = useContext(ContextHook);
  const [showNameButton, setshowNameButton] = useState(false);
  const [showEditButton, setshowEditButton] = useState(false);

  const textInputName = useRef();
  const textInputEmail = useRef();

  const setData = () => {
    let a = tableData.map((ele) => {
      if (
        textInputName.current.id === ele.id ||
        textInputEmail.current.name === ele.name
      ) {
        return {
          ...ele,
          name: textInputName.current.value,
          email: textInputEmail.current.value,
        };
      }
      return ele;
    });
    settableData(a);
    setshowNameButton(false);
    setshowEditButton(false);
  };
  const cancelData = () => {
    tableData.forEach((element) => {
      if (
        textInputName.current.id === element.id ||
        textInputEmail.current.name === element.name
      ) {
        textInputName.current.value = element.name;
        textInputEmail.current.value = element.email;
      }
    });
    setshowNameButton(false);
    setshowEditButton(false);
  };
  return (
    <>
      <tr>
        <td>{id}</td>

        {isInEditMode ? (
          <td>
            <input
              type="text"
              id={id}
              ref={textInputName}
              defaultValue={name}
              onClick={() => setshowNameButton(true)}
              autoComplete="off"
              className="form-control"
            />
            {showNameButton ? (
              <>
                <button onClick={setData} className="faBtn fa-right">
                  <i className="fa fa-check"></i>
                </button>
                <button onClick={cancelData} className="faBtn fa-cancel">
                  <i className="fa fa-times"></i>
                </button>
              </>
            ) : (
              <></>
            )}
          </td>
        ) : (
          <td>{name} </td>
        )}

        {isInEditMode ? (
          <td>
            <input
              type="text"
              name={name}
              ref={textInputEmail}
              defaultValue={email}
              onClick={() => setshowEditButton(true)}
              autoComplete="off"
              className="form-control"
            />
            {showEditButton ? (
              <>
                <button onClick={setData} className="faBtn fa-right">
                  <i className="fa fa-check"></i>
                </button>
                <button onClick={cancelData} className="faBtn fa-cancel">
                  <i className="fa fa-times"></i>
                </button>
              </>
            ) : (
              <></>
            )}
          </td>
        ) : (
          <td>{email} </td>
        )}
        <td>{`${body.slice(0, 15)}...`}</td>
      </tr>
    </>
  );
};

export default TableList;
