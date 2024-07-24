 import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movies : [],
    selectedGenre: [], 
    searchValue : " ",
    favorites : []
}
const MovieSlice =  createSlice({
    name : 'movies',
    initialState,
    reducers : {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setGenresValue : (state, action) => {
            state.selectedGenre = action.payload || [ ];
        },
       
        setFavoriteMovies: (state, action) => {
            state.favorites = Array.isArray(action.payload) ? action.payload : [];
        },
        addFavoriteMovie: (state, action) => {
            if (Array.isArray(state.favorites)) {
              if (!state.favorites.find(movie => movie.id === action.payload.id)) {
                console.log("Adding Movie:", action.payload);
                state.favorites.push(action.payload);

              }
            } else {
              state.favorites = [action.payload];
            }
          },
          removeFavoriteMovie: (state, action) => {
            // Ensure favoriteMovies is an array
            if (Array.isArray(state.favorites)) {
                console.log("Removing Movie ID:", action.payload);
              state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
            }
          },
       
    }
})

export const {setMovies,setSearchValue , setGenresValue ,addFavoriteMovie, setFavoriteMovie, removeFavoriteMovie} = MovieSlice.actions
export default MovieSlice.reducer