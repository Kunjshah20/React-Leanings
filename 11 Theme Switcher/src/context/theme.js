import { createContext, useContext } from "react";

// 1. from previous syntax, this is different
// 2. createContext can include default values in object
export const ThemeContext = createContext({
    themeMode: "light", // On toggling, this data is changed via custom hook. light -> dark or vice versa
    darkTheme: () => {},
    lightTheme: () => {},
}); // initial data

export const ThemeProvider = ThemeContext.Provider // passing/PROVIDING data to children

export default function useTheme(){
    return useContext(ThemeContext);
}; // using this, I can capture data through this custom hook