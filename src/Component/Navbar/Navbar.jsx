import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, InputBase,  Drawer, List, ListItem, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SelectorComponent from "../SelectorComp/SelectorComponent";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setGenresValue } from "../../Slice/MovieSlice";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ThemeBtn from "../ThemeBtn";
import { lightTheme, darkTheme } from "../../context/themee";
import {IconButton }from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [themeMode, setThemeMode] = React.useState("light");
  const [drawerOpen, setDrawerOpen] = React.useState(false);


  const theme = React.useMemo(
    () => (themeMode === "light" ? lightTheme : darkTheme),
    [themeMode]
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const dispatch = useDispatch();

  const { searchValue, selectedGenre } = useSelector((state) => state.movies);
  const SearchChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  console.log(searchValue);

  const handleGenreChange = (genre) => {
    dispatch(setGenresValue(genre));
  };

  const genres = [
    { label: "Action", value: "action ", drama: "crime" },
    { label: "Comedy", value: "comedy" },
    { label: "Drama", value: "drama" },
    { label: "Family", value: "family" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Horror", value: "horror" },
    { label: "Adventure", value: "adventure" },
    { label: "Crime", value: "crime" },
    { label: "Animation", value: "animation" },
    { label: "Documentary", value: "documentary" },
    { label: "Romance", value: "romance" },
    { label: "Sci-Fi", value: "sci-fi" },
    { label: "Thriller", value: "thriller" },
    { label: "Mystery", value: "mystery" },
    { label: "War", value: "war" },
    // Add more genres as needed
  ];
  
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/favorites">
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem>
          <SelectorComponent
              genres={genres}
              onGenreChange={handleGenreChange}
              selectedGenre={selectedGenre}
            /> 
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList()}
          </Drawer>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Movies App
          </Typography>
          <Search onChange={SearchChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <SelectorComponent
              genres={genres}
              onGenreChange={handleGenreChange}
              selectedGenre={selectedGenre}
            />
            {/* <SelectorComponent/> */}
            <Button component={Link} to="/favorites" sx={{ color: "white" }}>
              Favorites
            </Button>
          </Box>
          <ThemeBtn />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
