import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  const content = (
    <div
      className={`fixed left-[10%] top-[22vh] z-[100] w-4/5 rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)] md:w-[40rem] md:left-[calc(50% - 20rem)] ${props.className}`}
      style={props.style}
    >
      <header
        className={`w-full bg-[#2a006e] px-2 py-4 text-white ${props.headerClass}`}
      >
        <h2 className="m-2">{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`px-2 py-4 ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`px-2 py-4 ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
