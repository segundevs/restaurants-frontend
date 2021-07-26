import { useState } from 'react';
import {StyledForm, FormGroup, InputField} from '../UploadForm/UploadForm.style';
import {StyledButton} from '../../components/Button';
import { useAuth } from '../../contexts/Auth';

const Register = () => {

  const {loading, error, registerUser, user} = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    registerUser(username, email, password);
    console.log(user)
  }

  return (
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
      <StyledButton mt="30px" ht="35px" wt="100%">Register</StyledButton>
    </StyledForm>
  )
}

export default Register
