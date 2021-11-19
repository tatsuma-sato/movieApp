import React, { useContext } from "react";
// import HeroNav from "./HeroNav";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../ReusableComponents/Container";
import HeroNavLink from "./HeaderNavLink";
import Output from "../Output/Output";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  const {
    hiddenMenu,
    setHiddenMenu,
    search,
    setSearch,
    handleSearch,
    activeLink,
  } = useContext(MovieContext);

  return (
    <div>
      <section className="header">
        <nav className="header_nav">
          <Container>
            <div className="wrapper">
              <h2 className="headerLogo">
                <Link to="/">
                  <FontAwesomeIcon icon={faFilm} />
                  Movie Searcher
                </Link>
              </h2>
              {/* <HeroNavMenu /> */}
              <div className={(hiddenMenu ? "hidden" : "") + " headerNavMenu"}>
                <HeroNavLink btnText="Popular" />
                <HeroNavLink btnText="All Movies" />
              </div>
            </div>
            {/* <HeroNavSearch /> */}
            <form onSubmit={handleSearch}>
              {activeLink !== "Popular" && (
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search for movies"
                />
              )}
            </form>
            <i
              className={hiddenMenu ? "fas fa-bars" : "fas fa-times"}
              id="burger"
              onClick={() => setHiddenMenu(!hiddenMenu)}
            ></i>
          </Container>
        </nav>
      </section>
      <Output />
    </div>
  );
}

export default Header;
