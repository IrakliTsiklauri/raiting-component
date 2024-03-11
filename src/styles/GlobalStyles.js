import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    font-family: "Overpass", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: rgba(24, 30, 39, 1);
  }

`;
