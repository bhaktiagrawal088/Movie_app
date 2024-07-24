import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import MovieCard from "../../Component/MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../API/getMovies";
import { GetMoviesBySearch , GetMoviesByGenre} from "../../utils/GetMoviesBySearch";

function Home() {
  const dispatch = useDispatch();
  const {movies, searchValue, selectedGenre} = useSelector((state) => state.movies);

  console.log("Selected Genre:", selectedGenre);
  console.log("Movies:", movies);
  const filterbyMovieName = GetMoviesBySearch(movies, searchValue)
  // const filterbyMovies = GetMoviesByGenre(filterbyMovieName, selectGenre);
  const filterbyMovies =  filterbyMovieName.filter(movies =>
    selectedGenre.length> 0 ? selectedGenre.includes(movies.genre.toLowerCase()) : true
  );

  // const filterbyMovies = filterbyMovieName.filter((movie) => {
  //   const movieGenres = typeof movie.genre === 'string'
  //     ? movie.genre.split(',').map(g => g.trim().toLowerCase())
  //     : [];

  //   return Array.isArray(selectedGenre) && selectedGenre.length > 0
  //     ? selectedGenre.some(genre => movieGenres.includes(genre.toLowerCase()))
  //     : true;
  // });

  // Filtering movies based on selected genres

  

  // const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <Navbar />
      <main className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      {
        filterbyMovies?.length > 0 ? (
          filterbyMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : ""
      } 
      </main>
    </div>
  );
}

export default Home;
