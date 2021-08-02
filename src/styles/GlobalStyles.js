import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
      
  }

  body {
    background-color: #1F1F1F;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;

    @media only screen and (max-width: 768px){
      width: 100%;
      height: 100%;
    }
  }

  .container {
    max-width: 80%;
    margin: 40px auto;
  }
`