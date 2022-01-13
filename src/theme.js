import React from 'react';
import { createTheme, responsiveFontSizes, ThemeOptions, Theme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
        main: '#297f3f',
        light: '#297f3f',            
        dark: '#212121',
        contrastText: '#fff',
    },
    secondary: {
        main: '#4183c4',
        light: '#69a6e2',            
        dark: '#2a6daf',
        contrastText: '#fff',
    },
    error: {
        main: '#f03e3e',
        light: '#17252A',            
        dark: '#17252A',
        contrastText: '#fff',
    },
    warning: {
        main: '#f0a04f',
        light: '#17252A',            
        dark: '#17252A',
        contrastText: '#fff',
    },
    info: {
        main: '#709ecc',
        light: '#17252A',            
        dark: '#17252A',
        contrastText: '#fff',
    },
    success: {
        main: '#4fe054',
        light: '#17252A',            
        dark: '#17252A',
        contrastText: '#fff',
    },
    text: {
        primary: '#297f3f',
        secondary: '#2e3133',
        hint: '#363c42',
        disabled: '#48494a',
        white:'#ffffff',
    },
    background: {
        default: '#f2f2f2',
        paper: '#dce3f2'
    }
},
typography: {
    // HERE
    fontFamily: 'Nunito, sans-serif',
    body1: {
        fontWeight: 300,
        fontSize: '0.88rem',
        lineHeight: '1.4285em'
      },
    body2: {
        fontWeight: 700,
        fontSize: '2rem',
    },
    button: {
        fontWeight: '300',
        fontSize: '1.8rem',
        lineHeight:'1.2',
    },
    h1: {
      fontWeight: 700,
      fontSize: '8rem',
    },
    h2: {
      fontWeight: 800,
      fontSize: '2rem',
      lineHeight:'1.28571429em'
    },
    h3: {
      fontWeight: 800,
      fontSize: '1.8rem',
      lineHeight: '1.28571429em'
    },
    h4: {
        fontWeight: '800',
        fontSize: '1.8rem',
    },
    h5: {
        fontWeight: 'bold',
        fontSize: '1.8rem',
    },
    h6: {
        fontWeight: 'bold',
        fontSize: '1.8rem',
    },
  },
});

export default theme;