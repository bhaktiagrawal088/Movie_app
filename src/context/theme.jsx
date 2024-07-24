import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../context/themee'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('dark');

    const theme = createTheme(themeMode === 'light' ? lightTheme : darkTheme);

    const lightThemeMode = () => setThemeMode('light');
    const darkThemeMode = () => setThemeMode('dark');

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ themeMode, lightTheme: lightThemeMode, darkTheme: darkThemeMode }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
