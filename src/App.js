import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './global-styles/theme';
import GlobalStyles from './global-styles/global-styles';

import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
