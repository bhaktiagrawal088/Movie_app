import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie } from '../../Slice/MovieSlice';

const FavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovie = useSelector((state) => state.movies.favoriteMovie || []);
  const isFavorite = favoriteMovie.some((favMovie) => favMovie.id === movie.id);

  console.log("Favorite Movies:", favoriteMovie);


  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteMovie(movie.id));
    } else {
        console.log("Dispatching addFavoriteMovie with movie:", movie);
      dispatch(addFavoriteMovie(movie));
    }
  };

  return (
    <button onClick={handleFavorite}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
