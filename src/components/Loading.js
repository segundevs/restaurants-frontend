import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled.div`

  @media only screen and (max-width: 768px){
    display: block;
    width: 100px;
    height: 100px;
    margin: 40vh auto;
  }
`

const Loading = () => {
  return (
    <StyledLoader>
    <Loader 
    type="Oval"
    color="#FFED98"
    timeout={2000}
    />
    </StyledLoader>
  )
}

export default Loading
