import React, { useEffect, useState }  from 'react';
import{ Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites';
import { ThemeProvider } from "./context/theme"; 

function App() {
 

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </ThemeProvider>
      
  );
}

export default App;
