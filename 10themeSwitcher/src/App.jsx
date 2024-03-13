import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/theme';
import ThemeBTN from './components/ThemeBTN';
import Card from './components/Card';


function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme=()=>{
    setThemeMode('light');
  }

  const darkTheme=()=>{
    setThemeMode('dark');
  }

  //Actual change in theme
  useEffect(()=>{
    const themePortion= document.querySelector("html").classList;
    themePortion.remove("light","dark");
    themePortion.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
          <div className='w-full'>
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBTN/>    
             </div>
    
              <div className="w-full max-w-sm mx-auto">
                        <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

/**
 * NOTES:Sometimes you have the functions in them provider which you doesn't know what is the functionality of that function in such cases you have to define the function with the exact name so that the default functionality of the function of that name is working according your defined functionality in the same function.
 */

export default App
