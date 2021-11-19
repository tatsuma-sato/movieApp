import React from "react";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroNavLogo() {
  return (
    <h2>
      <FontAwesomeIcon icon={faFilm} />
      Movie Searcher
    </h2>
  );
}

export default HeroNavLogo;
