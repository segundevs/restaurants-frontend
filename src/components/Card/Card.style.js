import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  @media only screen and (max-width: 768px){
  margin: 0.5rem auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  }

`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;


  @media only screen and (max-width: 768px){
    display: flex;
    padding: 5px 10px;
    width: 100%;
    height: 150px;
    margin: 5px 10px;
    box-shadow: 5px 5px 5px -5px #888888;
  }
`

export const StyledImage = styled.img`
width: 100%;
margin: 0 auto;
  @media only screen and (max-width: 768px){
    width: 120px;
    margin: 15px;
    border-radius: 25px;
    object-fit: cover;
    object-position: center;
  }
`

export const StyledDetails = styled.div`
  @media only screen and (max-width: 768px){
    margin: auto;
  }
`

export const StyledName = styled.h2`
   @media only screen and (max-width: 768px){
     font-size: 25px;
     margin: 0;
     padding: 5px;
   }
`

export const StyledLocation = styled.h5`
   @media only screen and (max-width: 768px){
     font-size: 16px;
     margin: 0;
     padding: 5px;
   }
`

export const StyledDescription = styled.h6`
 @media only screen and (max-width: 768px){
    font-size: 12px;
     margin: 0;
     padding: 5px;
 }
`