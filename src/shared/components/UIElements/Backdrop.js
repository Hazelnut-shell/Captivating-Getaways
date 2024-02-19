import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className="fixed left-0 top-0 z-10 h-screen
    w-full bg-[#000000bf]"
      onClick={props.onClick}
    ></div>,
    document.getElementById("backdrop-hook"),
  );
};

export default Backdrop;
