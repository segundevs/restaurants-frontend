import React, { useState } from 'react';
import { ImageContainer, Image, StyledWelcomePage } from './WelcomePage.style';
import logo from '../../img/eating-together.svg';
import { StyledButton } from '../../components/Button';
import { useHistory } from 'react-router-dom';
import Loading from '../../components/Loading';


const WelcomePage = () => {
  const [loading, setLoading] = useState(false);

    
  const history = useHistory();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => { 
      history.push('/home');
    }, 2000)
      
  }
  return (
    <>
    {loading && <Loading />}
    <StyledWelcomePage>
      <ImageContainer>
        <Image src={logo}/>
      </ImageContainer>
      <StyledButton onClick={handleClick}>Hello</StyledButton>
    </StyledWelcomePage>
    </>
  )
}

export default WelcomePage
