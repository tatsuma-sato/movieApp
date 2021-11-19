import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../ReusableComponents/Container";
import "../../styles/styles.scss";
import { Link } from "react-router-dom";

function Popular() {
  const { popularMovies } = useContext(MovieContext);

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
    <div className="popularMovie">
      <Container>
        {popularMovies &&
          popularMovies.map((popularMovieItem) => (
            <div className="movie-item" key={popularMovieItem.id}>
              <img
                key={popularMovieItem.id}
                src={`https://image.tmdb.org/t/p/w500${popularMovieItem.poster_path}`}
                alt={popularMovieItem.name}
              />
              <div className="over-lay">
                <div className="over-lay-container">
                  <h3 className="over-lay-title">
                    {popularMovieItem.title !== undefined
                      ? popularMovieItem.title
                      : "Title not found..."}
                  </h3>
                  <p
                    className="over-lay-rate"
                    style={{ background: changeBackGround(popularMovieItem) }}
                  >
                    {popularMovieItem.vote_average}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Container>
    </div>
  );
}

export default Popular;
