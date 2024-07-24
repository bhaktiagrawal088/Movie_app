import React from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCard from '../Component/MovieCard/MovieCard'
import { getFavoriteMovies } from '../Slice/SelectFavMovie';

const Favorites = () => {
  const navigate = useNavigate();
  const favoriteMovies = useSelector(getFavoriteMovies); // Use memoized selector
  console.log("Favorite Movies from Redux:", favoriteMovies); // Check values here
  console.log(favoriteMovies)
  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Favorites
      </Typography>
      {favoriteMovies.length > 0 ? (
        <Grid container spacing={2}>
          {favoriteMovies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">No favorite movies added yet.</Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleBackToHome}>
        Back to Home
      </Button>
    </Box>
  );
};

export default Favorites;
