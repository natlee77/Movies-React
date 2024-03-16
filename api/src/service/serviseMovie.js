import axios from "axios"; 
import { BaseUrl } from   "./utils.js";
 
 

export const getMovies = async () => {
  //   const response = await fetch(`${BaseUrl}s=star`);
  //   const data = await response.json();
  //   return data.Search;

   const response = await axios.get(`${BaseUrl}s=dog`);
  //('http://www.omdbapi.com/?apikey=4823d2e&s=harry')
   
  return response.data.Search;
};

export const getMoviesByTitle = async (title) => {
  const response = await axios.get(`${BaseUrl}s=${title}`);
  
  localStorage.setItem("movies", JSON.stringify(response.data.Search));
  return response.data.Search;
};