// selectors.js
import { createSelector } from 'reselect';

// Assuming your state shape is { movies: { favoriteMovies: [] } }
const selectMoviesState = (state) => state.movies;


export const getFavoriteMovies = createSelector(
    [selectMoviesState],
    (moviesState) => moviesState.favoriteMovies || [] // Provide a default empty array if undefined

  );
