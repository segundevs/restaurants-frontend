import React from 'react';
import logo from '../../img/error.svg';
import { ErrorImg, Heading, StyledError } from './NotFound.style';

const PageNotFound = () => {
  return (
    <StyledError>
      <ErrorImg src={logo} alt="Not found" />
      <Heading>Page Not Found</Heading>
    </StyledError>
  )
}

export default PageNotFound

