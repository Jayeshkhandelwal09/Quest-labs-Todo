import React, { useState } from "react";
import "./Card.css";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import Dropdown from "../Dropdown/Dropdown";

const Card = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="card">
      <div className="card_top">
        <div className="card_top_labels">
          <Chip text="Frontend" color="green" />
        </div>
        <div className="card_top_more" onClick={()=> setShowDropdown(true)}>
        <MoreHorizontal />
        {showDropdown && (
          <Dropdown onClose={()=> setShowDropdown(false)}>
            <div className="card_dropdown">
              <p>Delete Card</p>
            </div>
          </Dropdown>
        )}
      </div>
      </div>

      <div className="card_title">sadasda</div>
      <div className="card_footer">
        <p>
          <Clock /> 16-03-2024
        </p>
        <p>
          <CheckSquare /> 1/4
        </p>
      </div>
    </div>
  );
};

export default Card;
