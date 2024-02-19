import React from "react";

const PlaceForm = (props) => {
  return ( 
    <form className="relative list-none w-11/12 max-w-2xl mx-auto my-0 p-4 rounded-md bg-white shadow-[0_2px_8px_-15px_rgba(0,0,0,0.26)]" onSubmit={props.onSubmitHandler}>
      {props.children}
    </form>
  );
};

export default PlaceForm;
