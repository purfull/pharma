import React, { createContext, useContext } from "react";
import { useState } from "react";


const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);


export const MainContextProvider = ({ children }) => {

    const [themeMode, setThemeMode] = useState('dark')
    const [sideBarOptions, setSideBarOptions] = useState({})
    const [open, setOpen] = useState(true);
    const [currentColor, setCurrentColor] = useState("#03C9D7");

    // Snack bar

    const [message, setMessage] = useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setMessage("");
    };


    const contextValue = {
        themeMode,
        setThemeMode,
        sideBarOptions,
        setSideBarOptions,
        open,
        setOpen,
        currentColor,
        setCurrentColor,
        message,
        setMessage,
        handleClose
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
