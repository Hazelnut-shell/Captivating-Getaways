import React from "react";

const Card = (props) => {
  // w-[90%] max-w-96 mx-auto my-28 text-center
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)] ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
