import React from "react";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../context/AuthContext";
import { InputAdornment } from "@mui/material";
import { Dropdown } from "../components/Dropdown";
import Autocomplete from "@mui/material/Autocomplete";
import "../components/AramaStil.css";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";



const API_KEY = "cd567f159f9e918d13682169fd01a12a";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function Arama() {

  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [result, setResult] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  useEffect(() => {
    searchMovies();
  }, [searchTerm]);

  console.log(result);
  console.log(searchTerm);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

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

  const handleSubmit = (e) => {
    e.prevent.default();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      alert("Please login");
    } else {
      alert("Please enter a search term");
    }
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
