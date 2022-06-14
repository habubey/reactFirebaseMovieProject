import React, { useState, useEffect } from "react";
import Cards from "../components/Cards.js";
import axios from "axios";


const API_KEY = "cd567f159f9e918d13682169fd01a12a";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const Listeleme = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {movies.map((movie) => (
        <Cards key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Listeleme;
