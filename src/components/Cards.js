import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';


const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Cards = ({ title, poster_path, overview, id, vote_average  }) => {
  const { currentUser } = useContext(AuthContext);
  let navigate = useNavigate();
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      style={{ width: "400px" }}
      
    >
      <CardMedia onClick={() =>
    currentUser ? navigate("/detay/" + id) : alert("Please login")
      }
        component="img"
        alt="movie poster"
        height="540"
        style={{ cursor: "pointer" }}
        image={IMG_API + poster_path}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Rating: {vote_average}
        </Typography>
      </CardContent>
      {currentUser && (<CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>)}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{overview}</Typography>

         
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Cards;
