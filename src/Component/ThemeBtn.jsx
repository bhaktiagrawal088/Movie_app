import React from 'react';
import { useTheme } from '../context/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function ThemeBtn() {
    const { themeMode, darkTheme, lightTheme } = useTheme();

    const onChangeBtn = () => {
        if (themeMode === 'dark') {
            lightTheme();
        } else {
            darkTheme();
        }
    };

    return (
        <Tooltip title={themeMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <IconButton onClick={onChangeBtn} color="inherit">
                {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Tooltip>
    );
}
