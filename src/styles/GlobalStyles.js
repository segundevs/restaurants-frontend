import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    display: hidden;
    background-color: yellow;
    font-family: 'Quicksand', sans-serif;

    @media only screen and (max-width: 768px){
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      background-color: #1F1F1F;
      color: #FFFFFF;
      overflow-x: hidden;
      width: 100%;
      height: 100%;
    }
  }
`