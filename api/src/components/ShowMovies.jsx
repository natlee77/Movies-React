import React, { useState } from "react";
import { getMovies } from "../service/serviseMovie.js";
import {Movies}  from "./Movies.jsx";
import {SearchMovies}  from "./SearchMovie.jsx";

const ShowMovies = () => {
 
    const[movies, setMovies] = useState([]);
    //in case button click
    const handleSearch = async () => {
            // const res = await fetch("http://www.omdbapi.com/?apikey=4823d2e&s=STAR");
            // const data = await res.json();
            // console.log(data);  
            // setMovies(data.Search);
      const data = await getMovies(); 
      setMovies(data);
    }
  return(
     <>
      <SearchMovies sendMoviesToParent={setMovies} />
      <h2>Movies</h2>  
      {/* <button className="btn"  
      onClick={handleSearch}> -Show Filmer - Dog </button>  */}
      <Movies movies={movies} />
      </>
 
  )
};

export default ShowMovies;
 