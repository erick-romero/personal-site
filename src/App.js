import './App.css';
import React from 'react'
import { createTheme,ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import HeroComponent from './components/HeroComponent';
import HeaderComponent from './components/HeaderComponent';

const darkTheme = createTheme({
  palette:{
    type:"dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}> 
    <CssBaseline/>
    <HeaderComponent/>
    <HeroComponent/>
    </ThemeProvider>
  );
}

export default App;
