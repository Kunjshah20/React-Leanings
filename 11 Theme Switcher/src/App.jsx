import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react';
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';

function App() {

const[themeMode, setThemeMode] = useState("light"); 

// darkTheme, lightTheme are functions in theme context but never defined
// we can define that functions here with the same name

const lightTheme = () => {
  setThemeMode("light");
}

const darkTheme = () => {
  setThemeMode("dark");
} 

// actual change in theme

useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark");
  document.querySelector('html').classList.add(themeMode);
}, [themeMode]);

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
