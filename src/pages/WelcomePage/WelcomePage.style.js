import styled from 'styled-components';

export const Image = styled.img`
  

  @media(max-width: 768px){
    width: 100%;
    height: 100%
  }  
`

export const ImageContainer = styled.div`

  @media only screen and (max-width: 768px){
  margin-top: 10vh;
  width: 350px;
  height: 300px;
  } 
`

export const StyledWelcomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      margin-top: 5vh;
      width: 800px;
      height: 450px;

      img {
        width: 100%;
        height: 100%
      }
    }

    a {
      color: #323232;
      text-decoration: none;
      margin: 40px auto;
      background-color: #FFED98;
      padding: 8px 40px;
      border-radius: 10px;

      &:hover {
        background-color: greenyellow;
      }
    }
  
  @media only screen and (max-width: 768px){
    div {
      width: 350px;
      height: 300px;
    }
  }
`