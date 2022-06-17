import React from "react";

import TextField from "@mui/material/TextField";
import { useState, useEffect,  } from "react";
import axios from "axios";



import Autocomplete from "@mui/material/Autocomplete";
import "../components/AramaStil.css";

import { Link, useNavigate } from "react-router-dom";



const API_KEY = "cd567f159f9e918d13682169fd01a12a";



function Arama() {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const [result, setResult] = useState([]);



  useEffect(() => {
    if (searchTerm) {
      
      searchMovies();
    }
  }, [searchTerm]);

  console.log(result);
  console.log(searchTerm);



  const searchMovies = (API) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      )
      .then((res) =>
        setResult(
          res.data.results
            .map((item) => ({
              id: item.id,
              label: item.title,
            }))
            .splice(0, 2)
        )
      )

      .catch((err) => console.log(err));
  };



  return (
    <div className="mainButton">
      <Autocomplete
        onInputChange={(event, value) => {
          setSearchTerm(value);
        }}
        onChange={(event, value) => {
          console.log(value)
          navigate(`/detay/${value.id}`);
        }}
        disablePortal
        id="combo-box-demo"
        options={result || []}
        sx={{ margin: "50px", width: 500 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />

      <Link to={"/listeleme"}  >
        <button className="moreSearch"> More Movies</button>
      </Link>
    </div>
  );
}

export default Arama;
