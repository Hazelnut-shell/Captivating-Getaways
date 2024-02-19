import React from "react";

const MainHeader = (props) => {
  return (
    <header className="fixed left-0 top-0 z-[5] flex h-16 w-full items-center justify-start bg-[#ff0055] px-4 py-0 shadow-[0_2px_6px_rgba(0,0,0,0.26)] md:justify-between">
      {props.children}
    </header>
  );
};

export default MainHeader;
