import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";

const HeaderNavLink = ({ btnText }) => {
  const { setHiddenMenu, activeLink, setActiveLink } = useContext(MovieContext);

  return (
    <button
      onClick={() => {
        setActiveLink(btnText);
        setHiddenMenu(true);
      }}
      style={{ color: activeLink === btnText ? "yellow" : "darkgrey" }}
    >
      {btnText}
    </button>
  );
};

export default HeaderNavLink;
