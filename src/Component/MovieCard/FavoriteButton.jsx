import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie } from '../../Slice/MovieSlice';

const FavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovie || []);

  const isFavorite = favoriteMovies.some((favMovie) => favMovie.id === movie.id);

  console.log("Favorite Movies from Selector:", favoriteMovies);
  console.log("Current Movie ID:", movie.id);
  console.log("Is Favorite:", isFavorite);


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
    if (isFavorite) {
      dispatch(removeFavoriteMovie(movie.id));
    } else {
      dispatch(addFavoriteMovie(movie));
    }
  };
  

  return (
    <button onClick={handleFavoriteClick}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
