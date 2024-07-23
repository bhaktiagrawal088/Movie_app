import {configureStore} from '@reduxjs/toolkit'
import movieReducer from '../Slice/MovieSlice'

export const Store = configureStore({
    reducer: {
        movies: movieReducer

    }
})