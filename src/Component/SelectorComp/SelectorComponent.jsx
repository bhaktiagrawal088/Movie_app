import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';


// export default function SelectorComponent() { 
//   const [age, setAge] = React.useState('');
const SelectorComponent = ({ genres = [], onGenreChange = [] , selectedGenre = []}) => {
  // const [localselectedGenre, setLocalSelectedGenre] = React.useState('');


  const handleGenreChange = (event) => {
    const genre = event.target.value;
    // setLocalSelectedGenre(genre);
    onGenreChange(genre);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: 'white', borderRadius: "4px"}} size="small"  >
      <InputLabel sx={{ color: 'black' }} id="demo-select-small-label">Genre</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small" 
        sx={{ color: 'black' }}
        value={selectedGenre}
        label="Genre"
        onChange={handleGenreChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
       
        {genres.map((genre) => (
          <MenuItem key={genre.value} value={genre.value}>
            {genre.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
SelectorComponent.propTypes = {
  genres: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};
export default SelectorComponent;
