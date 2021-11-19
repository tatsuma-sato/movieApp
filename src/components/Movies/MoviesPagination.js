import React from "react";
import Container from "../ReusableComponents/Container";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";

function MoviesPagination() {
  const { newPage, currentPage, showPagination } = useContext(MovieContext);

  return (
    <div className="moviesPagination">
      {showPagination && (
        <Container>
          <button
            style={{
              cursor: currentPage !== 1 ? "pointer" : "not-allowed",
              background: currentPage !== 1 ? "rgb(0, 185, 0)" : "#333",
              
            }}
            onClick={() => newPage("previous")}
          >
            Prev Page
          </button>
          <button onClick={() => newPage("next")}>Next Page</button>
        </Container>
      )}
    </div>
  );
}

export default MoviesPagination;
