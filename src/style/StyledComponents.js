import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5fff7;
    color: #333;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
