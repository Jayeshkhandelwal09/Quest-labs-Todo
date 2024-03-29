import React, { useState } from "react";
import "./Board.css";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(props);
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {props.board.title} <span>{` ${props.board.cards.length}`}</span>
        </p>
        <div className="board_top_more" onClick={() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="board_dropdown">
                <p onClick={() => props.removeBoard(props.board.id)}>
                  Delete Board
                </p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>

      <div className="board_cards custom-scroll">
        {props.board.cards.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board.id}
            handleDragEnter={props.handleDragEnter}
            handleDragEnd={props.handleDragEnd}
            updateCard={props.updateCard}
          />
        ))}

        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card title"
          onSubmit={(value) => props.addCard(value, props.board.id)}
        />
      </div>
    </div>
  );
};

export default Board;
