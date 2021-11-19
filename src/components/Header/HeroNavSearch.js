import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";

function HeroNavSearch() {
  const { search, setSearch, handleSearch, activeLink } =
    useContext(MovieContext);

  return (
    <form onSubmit={handleSearch}>
      {activeLink !== "Popular" && (
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Sraech for movies"
        />
      )}
    </form>
  );
}

export default HeroNavSearch;
