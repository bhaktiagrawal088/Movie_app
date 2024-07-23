 import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movies : [],
    searchValue : " "
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
        }
    }
})

export const {setMovies,setSearchValue } = MovieSlice.actions
export default MovieSlice.reducer