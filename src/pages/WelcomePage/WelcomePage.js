import { StyledWelcomePage } from './WelcomePage.style';
import logo from '../../img/eating-together.svg';
import { Link } from 'react-router-dom';


const WelcomePage = () => {
  return (
    <StyledWelcomePage>
      <div>
        <img src={logo} alt="app-logo"/>
      </div>
      <Link to='/home'>
        Explore
      </Link>
    </StyledWelcomePage>
  )
}

export default WelcomePage
