import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,body {
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.pageBg};
    color: ${({ theme }) => theme.text};
  }

  #root {
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
