import React from "react";
import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Filmdetay = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [videoKey, setVideoKey] = useState();
  const { id } = useParams();
  const API_KEY = "cd567f159f9e918d13682169fd01a12a";
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);

  return (
    <div >
    
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="poster"
     
        image={IMG_API + movieDetails?.poster_path}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {movieDetails?.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Release Date: {movieDetails?.release_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        IMDB Rating: {movieDetails?.vote_average}
        </Typography>
        <Typography variant="body2" color="text.third">
        {movieDetails?.overview}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {movieDetails?.movieDetails?.vote_count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share via Email</Button>
        <Button size="small">Add To Favorite</Button>
        <Button size="small">Make a Comment</Button>
      </CardActions>
     
      <Link to={-1} size="small">Go Back</Link>
      
      
                
              
    </Card>


    </div>
    
    )
};

export default Filmdetay;
