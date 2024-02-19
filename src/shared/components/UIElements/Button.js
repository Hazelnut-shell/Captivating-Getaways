import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const base = `py-2 px-6 border border-solid cursor-pointer mr-4 inline-block no-underline rounded-s focus:outline-none  disabled:bg-[#ccc] disabled:text-[#979797] disabled:border-[#ccc] disabled:cursor-not-allowed`;

  const styleTypes = {
    normal:
      " bg-[#ff0055] text-white border-[#ff0055] hover:bg-[#ff4382] hover:border-[#ff4382] active:bg-[#ff4382] active:border-[#ff4382]",
    danger:
      " bg-[#830000] text-white border-[#830000] hover:bg-[#f34343] hover:border-[#f34343] active:bg-[#f34343] active:border-[#f34343]",
    inverse:
      " bg-transparent text-[#ff0055] border-[#ff0055] hover:bg-[#ff0055] hover:border-[#ff4382] hover:text-white active:bg-[#ff0055] active:border-[#ff4382] active:text-white",
  };

  // const sizes = {
  //   "small":"text-xs",
  //   "big":"text-2xl"
  // }

  const styleType = props.inverse ? "inverse" : (props.danger ? "danger" : "normal");

  if (props.href) {
    return (
      <a className={base + styleTypes[styleType]} href={props.href}>
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact} className={base + styleTypes[styleType]}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={base + styleTypes[styleType]}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
