// import React, { useEffect, useState } from 'react';
// import { getMovies , fetchMovies} from '../../API/getMovies'; // Adjust the import path as necessary

// const MovieDetails = ({ movieId }) => {
//     const [movie, setMovie] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         console.log('Received movieId:', movieId); 
//         if (movieId) {
//             const fetchMovie = async () => {
//                 try {
//                     const data = await getMovies(movieId);
//                     setMovie(data);
//                 } catch (error) {
//                     setError(error);
//                 }
//             };

//             fetchMovie();
//         } else {
//             console.error('movieId is undefined');
//         }
//     }, [movieId]);

//     if (error) {
//         return <div>Error fetching movie details: {error.message}</div>;
//     }

//     if (!movie) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>{movie.title}</h1>
//             <p>{movie.overview}</p>
//             {/* Render other movie details as needed */}
//         </div>
//     );
// };

// export default MovieDetails;
