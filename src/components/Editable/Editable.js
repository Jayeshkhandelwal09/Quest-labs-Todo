import React, { useState } from "react";
import { X } from "react-feather";
import "./Editable.css";

function Editable(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue , setInputValue] = useState( "")
  return (
    <div className="editable">
      {showEdit ? (
        <form
          className={`editable_edit ${props.editClass || ""}`}
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue);
            setShowEdit(false)
            setInputValue("")
          }}
        >
          <input
          autoFocus
            type="text"
            placeholder={props.placeholder || "Enter Item"}
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShowEdit(false)} />
          </div>
        </form>
      ) : (
        <p
          onClick={() => setShowEdit(true)}
          className={`editable_display ${props.displayClass || ""}`}
        >
          {props.text || "Add items"}
        </p>
      )}
    </div>
  );
}

export default Editable;
