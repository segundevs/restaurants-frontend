import styled from 'styled-components';

export const Image = styled.img`
  display: hidden;

  @media(max-width: 768px){
    width: 100%;
    height: 100%
  }  
`

export const ImageContainer = styled.div`
  display: hidden;

  @media only screen and (max-width: 768px){
  margin-top: 10vh;
  width: 350px;
  height: 300px;
  } 
`

export const StyledWelcomePage = styled.div`
  display: hidden;
  
  @media only screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`