import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import MovieCard from "../../Component/MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../API/getMovies";
import { GetMoviesBySearch } from "../../utils/GetMoviesBySearch";

function Home() {
  const dispatch = useDispatch();
  const {movies, searchValue} = useSelector((state) => state.movies);
  const filterbyMovieName = GetMoviesBySearch(movies, searchValue)

  // const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <Navbar />
      <main className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      {
        filterbyMovieName?.length > 0 ? (
          filterbyMovieName.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : ""
      } 
      </main>
    </div>
  );
}

export default Home;
