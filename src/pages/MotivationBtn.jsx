import React, { useState } from "react";
import Popup from "./Popup";

export const MotivationBtn = () => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
        console.log("open popup");
      };
      const handleClosePopup = () => {
        setShowPopup(false);
      };
  return (
    <>
      <div
        className={`motivationBtn px-4 transition-all duration-500`}
      >
        <a
          onClick={openPopup}
          type="button"
          className="text-gray-900 bg-green-200 hover:text-white hover:bg-green-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 "
        >
          Euphoric
        </a>
        <a
          onClick={openPopup}
          type="button"
          className="text-gray-900 bg-orange-200 hover:text-white hover:bg-orange-500  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
        >
          Innovative
        </a>
        <a
          onClick={openPopup}
          type="button"
          className="text-gray-900 bg-pink-200 hover:text-white hover:bg-pink-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
        >
          Supervision
        </a>
        <a
          onClick={openPopup}
          type="button"
          className="text-gray-900 bg-blue-200 hover:text-white hover:bg-blue-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
        >
          Counter Balance
        </a>
      </div>
      {showPopup && (
          <Popup
            imageURL={props.imageURL}
            name={props.name}
            jobTitle={props.jobTitle}
            nickname={props.nickname}
            onClose={handleClosePopup}
          />
        )}
    </>
  );
};
