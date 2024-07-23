import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import Icon from '@mui/material/Icon';
import { blue, grey } from '@mui/material/colors';




export default function MovieCard({movie}) {

  const {name, img_link, director_name, writter_name , duration, genre, year, imdb_rating } = movie

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: blue[100]}} >
      <CardMedia
        sx={{ height: 500 }}
        image={img_link}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Directed by : </b>{director_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <strong>Written by : </strong> {writter_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        <strong>Genre : </strong> <Chip label={genre} color="primary" size="small" />
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        <strong>Duration : </strong> {duration} min  
        <Icon sx={{ color: 'gold' , marginLeft: 2 }} > 
        <StarIcon/> 
      </Icon>{imdb_rating}
        <b style={{ marginLeft: 24}} >{year}</b>
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
      </IconButton>
      </CardActions>
    </Card>
  );
}

// import React from 'react';

// const MovieCard = ({ movie }) => {
//     return (
//         <div className='movie-card'>
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} />
//             <h2>{movie.title || movie.name}</h2>
//             <p>{movie.overview}</p>
//         </div>
//     );
// };

// export default MovieCard;


