import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const spanInBurgerButton = "bg-white block w-12 h-[2.5px]";

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="h-full">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="mr-8 flex h-12 w-12 cursor-pointer flex-col justify-around border-none bg-transparent md:hidden"
          onClick={openDrawerHandler}
        >
          <span className={spanInBurgerButton} />
          <span className={spanInBurgerButton} />
          <span className={spanInBurgerButton} />
        </button>
        <h1 className="text-white">
          <Link to="/" className="text-2xl font-semibold text-white no-underline">
            ExplorePlaces
          </Link>
        </h1>
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
