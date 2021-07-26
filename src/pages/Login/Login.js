import { useState } from 'react';
import {StyledForm, FormGroup, InputField} from '../UploadForm/UploadForm.style';
import {StyledButton} from '../../components/Button';
import { useAuth } from '../../contexts/Auth';

const Login = () => {

  const {loginUser, user} = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(email, password);
    console.log(user)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup>
      <label>Email</label>
      <InputField type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}/>
      </FormGroup>
      <FormGroup>
      <label>Password</label>
      <InputField type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
      </FormGroup>
      <StyledButton mt="30px" ht="35px" wt="100%">Login</StyledButton>
    </StyledForm>
  )
}

export default Login
