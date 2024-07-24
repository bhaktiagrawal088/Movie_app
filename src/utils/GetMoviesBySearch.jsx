export const GetMoviesBySearch = (movies = [], value = '') => {
    if (!Array.isArray(movies) || typeof value !== 'string') {
      return [];
    }
  
    const filteredMovies = value.length > 0 
      ? movies.filter(movie => 
          (movie.name && typeof movie.name === 'string' && movie.name.toLowerCase().includes(value.toLowerCase())) ||
          (movie.writter_name && typeof movie.writter_name === 'string' && movie.writter_name.toLowerCase().includes(value.toLowerCase())) ||
          (movie.director_name && typeof movie.director_name === 'string' && movie.director_name.toLowerCase().includes(value.toLowerCase()))
        )
      : movies;
  
    return filteredMovies;
  };


  export const GetMoviesByGenre = (movies, genre) => {
    if (!genre) return movies;
    return movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
  };

// export const getMoviesBySearch = (movies = [], value = '') => {
//     if (!Array.isArray(movies) || typeof value !== 'string') {
//       return [];
//     }
  
//     const lowerCaseValue = value.toLowerCase();
//     const regex = new RegExp(lowerCaseValue, 'i'); // 'i' flag for case-insensitive matching
  
//     const filteredMovies = value.length > 0 
//       ? movies.filter(movie => 
//           (movie.name && typeof movie.name === 'string' && regex.test(movie.name)) ||
//           (movie.writter_name && typeof movie.writter_name === 'string' && regex.test(movie.writter_name)) ||
//           (movie.director_name && typeof movie.director_name === 'string' && regex.test(movie.director_name))
//         )
//       : movies;
  
//     return filteredMovies;
//   };
  
  