import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  neutral: {
    900: '#303030',
    800: '#545454',
    700: '#7E7E7E',
    600: '#9E9E9E',
    500: '#C1C1C1',
    400: '#DADADA',
    300: '#EBEBEB',
    200: '#F3F3F3',
    100: '#FAFAFA',
  },
  green: {
    1: '#AFC97E',
    2: '#47624F',
  },
  orange: {
    3: '#C57B57',
    4: '#D56F3E',
  },
  blue: {
    5: '#80A1D4',
    6: '#2D82B7',
    7: '#044B7F',
  },
  grey: {
    1: '#403F4C',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
