 import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movies : [],
    selectedGenre: [], 
    searchValue : " ",
    favoriteMovie : []
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
       
        addFavoriteMovie: (state, action) => {
          state.favoriteMovie.push(action.payload);
        },
        removeFavoriteMovie: (state, action) => {
          state.favoriteMovie = state.favoriteMovie.filter(movie => movie.id !== action.payload);
        },
       
    }
})

export const {setMovies,setSearchValue , setGenresValue ,addFavoriteMovie, removeFavoriteMovie} = MovieSlice.actions
export default MovieSlice.reducer