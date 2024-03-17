import React from "react";
import "./CardInfo.css";
import Modal from "../../Modal/Modal";

const CardInfo = (props) => {
  return (
    <Modal onClose={() => props.onClose()}>
      <div className="cardinfo">
      <div className="cardinfo_box">
      <div className="cardinfo_box_title">
      </div>
      </div>
      </div>
    </Modal>
  );
};

export default CardInfo;
