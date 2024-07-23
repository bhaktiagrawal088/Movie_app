import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import MovieCard from "../../Component/MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../API/getMovies";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  // const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <Navbar />
      <main className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      {
        movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : ""
      } 
      </main>
    </div>
  );
}

export default Home;
