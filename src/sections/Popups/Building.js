import React, { useState } from "react";
import "./Popup.scss";

const Building = () => {
  let [openModal, setOpenModal] = useState(true);

  function closeModal() {
    setOpenModal(false);
    console.log(openModal);
  }

  return (
    <div
      id="open-modal"
      className={openModal ? "Popup Popup__Opened" : "Popup Popup__Closed"}
    >
      <div className="Popup__Container">
        <div className="Modal__Content">
          <button title="Close" class="Popup__Close" onClick={closeModal}>
            X
          </button>
          <div className="Popup__Title">I am still building!</div>
          <div className="Popup__Description">
            This page is not fully built yet, so expect to find some glitches,
            wormholes and specially lack of responsiveness. Unfortunately, my
            dog ate my site, but I am finishing soon.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
