import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background-color: #fff;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #00d1b2;
  }
`;

export default GlobalStyle;
