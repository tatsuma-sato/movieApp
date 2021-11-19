import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
  const API_KEY = "a49367dd215128e4eaab5f1c6a139f39";

  const [isLoading, setIsLoading] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [activeLink, setActiveLink] = useState("Popular");
  const [popularMovies, setPopularMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [showPagination, setShowPagination] = useState(true);

  const getPopularMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    fetch(
      `http://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${search}&page=${currentPage}`
    )
      .then((response) => {
        console.log("aaa");
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
        setShowPagination(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const newPage = (direction) => {
    if (direction === "next") {
      setCurrentPage((prevCurrent) => prevCurrent + 1);
      setIsLoading(true);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage((prevCurrent) => prevCurrent - 1);
    }
  };

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (search.trim() === "") {
          setMovies(data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setShowPagination(true);
    }
    getMovies();
  }, [search, currentPage]);

  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(loadingTimeOut);
  }, [movies, currentPage]);

  return (
    <MovieContext.Provider
      value={{
        hiddenMenu,
        setHiddenMenu,
        activeLink,
        setActiveLink,
        popularMovies,
        setPopularMovies,
        search,
        setSearch,
        currentPage,
        setCurrentPage,
        movies,
        setMovies,
        getPopularMovies,
        getMovies,
        handleSearch,
        isLoading,
        setIsLoading,
        showPagination,
        setShowPagination,
        newPage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
