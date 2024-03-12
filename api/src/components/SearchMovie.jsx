import { useState } from "react";
 import { getMoviesByTitle } from "../service/serviseMovie.js";
export const SearchMovies = ({ sendMoviesToParent }) => {
  const [searchText, setSearchText] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const data = await getMoviesByTitle(searchText);
    sendMoviesToParent(data);
    setSearchText("");
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text" placeholder="Search movie"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn">Search movie</button>
      </form>
    </>
  );
};