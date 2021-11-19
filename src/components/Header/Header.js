import React, { useContext } from "react";
// import HeroNav from "./HeroNav";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../ReusableComponents/Container";
import HeaderNavLink from "./HeaderNavLink";
import Output from "../Output/Output";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <FontAwesomeIcon icon={faFilm} />
                Movie Searcher
              </h2>
              {/* <HeroNavMenu /> */}
              <div className={(hiddenMenu ? "hidden" : "") + " headerNavMenu"}>
                <HeaderNavLink btnText="Trending" />
                <HeaderNavLink btnText="All Movies" />
              </div>
              {/* <HeroNavSearch /> */}
              <form onSubmit={handleSearch}>
                {activeLink !== "Trending" && (
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search for movies"
                  />
                )}
              </form>
            </div>
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
