import React from "react";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../context/AuthContext";
import { InputAdornment } from "@mui/material";

const API_KEY = "cd567f159f9e918d13682169fd01a12a";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function Arama() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
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
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          label="Search Movie "
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon type="submit" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
}

export default Arama;
