import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {

  margin: 0;
  padding: 0;
  background-color:${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: 'Segoe UI', sans-serif;
  transition: background 0.3s ease
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
  }
`;

export default GlobalStyle;
