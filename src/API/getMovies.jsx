import axios from 'axios';
import { setMovies } from '../Slice/MovieSlice';


export const getMovies = () => async  dispatch => {

    
    // const url = "https://api.themoviedb.org/3/tv/popular?api_key=7465beb5a1a108baf32769ba88629851&language=en-US&page=1"
    // const url = "https://api.themoviedb.org/3/discover/movie?api_key=7465beb5a1a108baf32769ba88629851"
    const url = "https://script.google.com/macros/s/AKfycbytTnQZ0wf1xELyAvuR6EA4Oka9Q-KcW55NOUF0r-IIcworsn1fygqMyb_9f-nWq6FXog/exec"

    try {
        const  response = await axios.get(url);
        console.log(response.data.data)
        dispatch(setMovies(response.data.data));
        return response.data.data;
        
    } catch (error) {
        return error
    }
}

// export const getMoviebySearch = (value) => async dispatch => {
//     const searchUrl = `${url}/search`;
//     try {
//         const {data} = await axios.get(searchUrl, {
//             params: {
//                 search : value
//             }
//         })
//         dispatch(setMovies(data))
//     } catch (error) {
//         return error
//     }
// }

// const api_key = '7465beb5a1a108baf32769ba88629851';
// const base_url = 'https://api.themoviedb.org/3';
// const image_url = 'https://image.tmdb.org/t/p/';

// // export const getGenres = async () => {
// //     const url = `${base_url}/genre/movie/list?api_key=${api_key}`;
// //     try {
// //         const response = await axios.get(url);
// //         return response.data;
// //     } catch (error) {
// //         console.error('Error fetching genres:', error);
// //         throw error;
// //     }
// // };

// // export const getPopularTVShows = async () => {
// //     const url = `${base_url}/tv/popular?api_key=${api_key}&language=en-US&page=1`;
// //     try {
// //         const response = await axios.get(url);
// //         return response.data;
// //     } catch (error) {
// //         console.error('Error fetching popular TV shows:', error);
// //         throw error;
// //     }
// // };

// // export const getRatedMovies = async (accountId) => {
// //     const url = `${base_url}/account/${accountId}/rated/movies?api_key=${api_key}&language=en-US&page=1&sort_by=created_at.asc`;
// //     try {
// //         const response = await axios.get(url);
// //         return response.data;
// //     } catch (error) {
// //         console.error('Error fetching rated movies:', error);
// //         throw error;
// //     }
// // };

// export const getMovies = async (movieId) => {
//     const url = `${base_url}/movie/${movieId}?api_key=${api_key}`;
//     try {
//         const response = await axios.get(url);
//         console.log(response)
//         return response.data;
//     } catch (error) {
//       return error
//         // console.error('Error fetching movie details:', error);
//         // throw error;
//     }
// };

// // export const getImageUrl = (path, size = 'w500') => `${image_url}${size}${path}`;



// import axios from 'axios';
// import { setMovies } from '../Slice/MovieSlice';

// const api_key = '7465beb5a1a108baf32769ba88629851';
// const base_url = 'https://api.themoviedb.org/3';

// export const fetchMovies = () => async dispatch => {
//     const url = `${base_url}/movie/popular?api_key=${api_key}`;
//     try {
//         const response = await axios.get(url);
//         dispatch(setMovies(response.data.results));
//     } catch (error) {
//         console.error('Error fetching movies:', error);
//     }
// };

// export const getMovies = async (movieId) => {
//     const url = `${base_url}/discover/movie/?api_key=${api_key}`;
//     try {
//         const response = await axios.get(url);
//         console.log(response)
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//         throw error;
//     }
// };

