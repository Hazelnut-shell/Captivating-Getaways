import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  const liClass = "m-4 md:my-0 md:mx-2";
  const aClass =
    "border-2 border-solid border-transparent rounded-md p-2 text-[#292929] no-underline hover:border-[#292929] hover:bg-[#f8df00] hover:text-[#292929] active:border-[#292929] active:bg-[#f8df00] active:text-[#292929] md:text-white md:border-none";

  return (
    <ul className="m-0 flex h-full w-full list-none flex-col items-center justify-center p-0 md:flex-row">
      <li className={liClass}>
        <NavLink to="/" className={aClass}>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li className={liClass}>
          <NavLink to={`/${auth.userId}/places`} className={aClass}>
            MY PLACES
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className={liClass}>
          <NavLink to="/places/new" className={aClass}>
            ADD PLACE
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li className={liClass}>
          <NavLink to="/auth" className={aClass}>
            AUTHENTICATE
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className={liClass}>
          <button
            onClick={auth.logout}
            className="cursor-pointer rounded-md bg-transparent p-2 text-[#292929] hover:bg-[#292929] hover:text-white focus:outline-none active:bg-[#292929] active:text-white md:text-white md:hover:bg-[#f8df00] md:hover:text-[#292929] md:active:bg-[#f8df00] md:active:text-[#292929]"
          >
            LOGOUT
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
