import React from 'react';
import { StyledContainer, StyledDescription, StyledDetails, StyledImage, StyledLocation, StyledName } from './Card.style';
import {StyledButton} from '../Button';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

const Card = ({data, loading, error}) => {
  const ApiUrl = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`
  return (
    <div>
      {loading && <Loading />}
      {error && <h4>Something went wrong...</h4>}
      {/* {data && console.log(data)} */}
      {data && data.map((arg) => (
        <StyledContainer key={arg.id}>
          <StyledImage src={`${ApiUrl}${arg.meal[0].url}`} alt="rest" />
          <StyledDetails>
            <StyledName>{arg.name}</StyledName>
            <StyledLocation>{arg.location}</StyledLocation>
            <StyledDescription>{arg.description}</StyledDescription>
            <Link to={`/restaurant/${arg.id}`}>
              <StyledButton wt="100%" ht="30px" mt="10px">Book a seat</StyledButton>
            </Link>
          </StyledDetails>
        </StyledContainer>
      ))}
      </div>
  )
}

export default Card
