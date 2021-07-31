import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {StyledForm, FormGroup, InputField} from '../UploadForm/UploadForm.style';
import {StyledButton} from '../../components/Button';
import { useAuth } from '../../contexts/Auth';

import { ImageContainer, Image } from '../WelcomePage/WelcomePage.style';
import logo from '../../img/eating-together.svg';

const Register = () => {
  const history = useHistory();

  const { loading, error, registerUser} = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()
    await registerUser(username, email, password);
    history.push('/login')  
  }

  return (
    <>
    <ImageContainer>
        <Image src={logo}/>
    </ImageContainer>
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup>
      <label>Email</label>
      <InputField type="email" onChange={(e) => setEmail(e.target.value)}/>
      </FormGroup>
      <FormGroup>
      <label>Password</label>
      <InputField type="password" onChange={(e) => setPassword(e.target.value)}/>
      </FormGroup>
      <FormGroup>
      <label>Username</label>
      <InputField type="text" onChange={(e) => setUsername(e.target.value)}/>
      </FormGroup>
      <StyledButton mt="30px" ht="35px" wt="100%">{loading ? 'Processing' : 'Register'}</StyledButton>
    </StyledForm>
    </>
  )
}

export default Register
