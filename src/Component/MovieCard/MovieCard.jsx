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
import { blue } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch , useSelector} from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie } from '../../Slice/MovieSlice';
import { getFavoriteMovies } from '../../Slice/SelectFavMovie';
import { useTheme } from '../../context/theme';
import { debounce } from 'lodash';





export default function MovieCard({movie}) {

  const {name, img_link, director_name, writter_name , duration, genre, year, imdb_rating } = movie
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(getFavoriteMovies);
  // console.log("Favorite Movies in Redux State:", favoriteMovies);
  // console.log("movie", movie)
  const isFavorite = Array.isArray(favoriteMovies) && favoriteMovies.some((favMovie) => favMovie.id === movie.id);


  // const debouncedHandleFavoriteClick = React.useMemo(() => debounce(() => {
  //   console.log('Current Favorite Movies:', favoriteMovies);
  //   if (isFavorite) {
  //     console.log('Dispatching removeFavoriteMovie with id:', movie.id);
  //     dispatch(removeFavoriteMovie(movie.id));
  //   } else {
  //     console.log('Dispatching addFavoriteMovie with movie:', movie);
  //     dispatch(addFavoriteMovie(movie));
  //   }
  // }, 300), [dispatch, isFavorite, movie, favoriteMovies]);
  
  // const handleFavoriteClick = () => {
  //   console.log('Current Favorite Movies:', favoriteMovies);
  //   if (isFavorite) {
  //     console.log('Dispatching removeFavoriteMovie with id:', movie.id);
  //     dispatch(removeFavoriteMovie(movie.id));
  //   } else {
  //     console.log('Dispatching addFavoriteMovie with movie:', movie);
  //     dispatch(addFavoriteMovie(movie));
  //   }
  // };
  const handleFavoriteClick = () => {
    dispatch(isFavorite ? removeFavoriteMovie(movie.id) : addFavoriteMovie(movie));
    console.log('Dispatching addFavoriteMovie with movie:', movie);
    console.log('Dispatching removeFavoriteMovie with id:', movie.id);
  };



  
  // console.log(isFavorite)

  const { themeMode } = useTheme();

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: themeMode === 'dark' ? blue[900] : blue[100] }} >
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
      <IconButton
          onClick= {(handleFavoriteClick)}
          color={isFavorite ? 'error' : 'primary'}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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


