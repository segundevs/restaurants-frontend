import { ImageContainer, Image, StyledWelcomePage } from './WelcomePage.style';
import logo from '../../img/eating-together.svg';
// import { StyledLink } from '../../components/Button';
import {Link} from 'react-router-dom';


const WelcomePage = () => {
  return (
    <StyledWelcomePage>
      <ImageContainer>
        <Image src={logo}/>
      </ImageContainer>
      <Link to='/home'>
        Explore
      </Link>
    </StyledWelcomePage>
  )
}

export default WelcomePage
