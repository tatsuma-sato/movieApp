import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../ReusableComponents/Container";
import Loader from "../ReusableComponents/Loader";
import notFound from "../../images/image-not-found.png";

function Movies() {
  const { movies, isLoading } = useContext(MovieContext);

  const changeBackGround = (movie) => {
    if (movie.vote_average > 8.5) {
      return "red";
    } else if (movie.vote_average > 6.5) {
      return "orange";
    } else if (movie.vote_average > 4.5) {
      return "green";
    } else {
      return "blue";
    }
  };

  return (
    <div className="movies">
      <Container>
        {movies && movies.length === 0 && (
          <h1 className="error">Result not found</h1>
        )}
        {!isLoading ? (
          movies &&
          movies.map((movieItem) => (
            <div className="movie-item">
              <img
                key={movieItem.id}
                src={
                  movieItem.poster_path === null
                    ? notFound
                    : `https://image.tmdb.org/t/p/w500${movieItem.poster_path}`
                }
                alt={movieItem.name}
              />

              <div className="over-lay">
                <div className="over-lay-container">
                  <h3 className="over-lay-title">
                    {movieItem.title !== undefined
                      ? movieItem.title
                      : "Title not found..."}
                  </h3>
                  <p
                    className="over-lay-rate"
                    style={{ background: changeBackGround(movieItem) }}
                  >
                    {movieItem.vote_average}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
}

export default Movies;
