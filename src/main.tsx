import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { extendTheme, ColorModeScript, ChakraProvider } from '@chakra-ui/react';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const colors = {
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
    1: '#C57B57',
    2: '#D56F3E',
  },
  blue: {
    1: '#80A1D4',
    2: '#2D82B7',
    3: '#044B7F',
  },
  grey: {
    1: '#403F4C',
  },
  white: {
    1: '#ffffff',
  },
};

const theme = extendTheme({ colors, config });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
