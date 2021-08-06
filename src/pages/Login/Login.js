import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {StyledForm, FormGroup, InputField} from '../UploadForm/UploadForm.style';
import {StyledButton} from '../../components/Button';
import { useAuth } from '../../contexts/Auth';

import { ImageContainer, Image } from '../WelcomePage/WelcomePage.style';
import logo from '../../img/eating-together.svg';

const Login = () => {
  const history = useHistory();

  const {loginUser, loading} = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()
    await loginUser(email, password);
    history.push('/profile'); 
  }

  return (
    <>
    <ImageContainer>
        <Image src={logo}/>
    </ImageContainer>
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup>
      <label>Email</label>
      <InputField type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}/>
      </FormGroup>
      <FormGroup>
      <label>Password</label>
      <InputField type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
      </FormGroup>
      <StyledButton mt="30px" ht="35px" wt="100%">{loading ? 'Processing' : 'Login'}</StyledButton>
    </StyledForm>
    </>
  )
}

export default Login
