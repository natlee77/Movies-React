import {useState, useEffect } from "react";
import ShowMovies from "./ShowMovies";
import axios from 'axios';
const ToAppApi = () => {
   const [movies, setMovies] = useState([]);
    //in case of automatisk when vi start App  
  useEffect(() => {
    if(movies.length>0) return;//not oanding looping
    const getData = async () => {        
            // const res = await fetch("http://www.omdbapi.com/?apikey=4823d2e&s=harry");
            // const data = await res.json();
          //  const res= await axios.get(
          //   'http://www.omdbapi.com/?apikey=4823d2e&s=harry')
        const res= await axios.get('http://www.omdbapi.com/?apikey=4823d2e&s=2023')      
           
            
         setMovies(res.data.Search);
           
      } 
        getData();
    }, []);//1 gång med start 
  
  
  return (
  <>
  
  <ShowMovies />
  {movies.map((m) => (
    <div key={m.imdbID} className="movie">
      <h3>{m.Title}</h3>
      <div className="image-wrapper">
        <img src={m.Poster} alt={m.Title} />
      </div>
    </div>
  ))}
  </>
  );
};

export default ToAppApi;

/*Fetch(url): Promise<Response> 

 ex: 
 fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(res => res.json()) //automatisk returns--- utan{}in anonimn F.- {res.json()}
   .then(data => {console.log(data)})//samma only skriv i konsol
   .catch(err => console.log(err))//async --not acvailable-->instead use try{}catch

*/

