import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../ReusableComponents/Container";
import Popular from "../Popular/Popular";
import Movies from "../Movies/Movies";
import MoviesPagination from "../Movies/MoviesPagination";

function Output() {
  const { activeLink } = useContext(MovieContext);

  return (
    <div className="output">
      {activeLink === "Trending" && (
        <Container>
          <Popular />
        </Container>
      )}
      {activeLink === "All Movies" && (
        <Container>
          <Movies />
          <MoviesPagination />
        </Container>
      )}
    </div>
  );
}

export default Output;
