import React, { useState } from 'react';
import { StyledButton } from '../../components/Button';
import { StyledForm, FormGroup, InputField } from './UploadForm.style';
import { useData } from '../../contexts/DataContext';
import { useAuth } from '../../contexts/Auth';




const UploadForm = () => {
  const {user} = useAuth();
  const {addRestaurant, error, msg} = useData();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  // const [services, setServices] = useState('Regular');
  const [images, setImages] = useState([]);
  const [err, setErr] = useState(null);

  const initialData = {
    name:name,
    location:location,
    description:description,
    // services,
    images:images
  }


  const types = ['image/jpeg', 'image/png'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user){
      addRestaurant(initialData);
    }
      
  }

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    setImages(selected);
      setErr('');

    if(selected && types.includes(selected.type)){
      
    } else {
      setImages(null)
      setErr('Please upload a valid file format jpeg or png')
    }
    
  }
  return (
    
    <StyledForm onSubmit={handleSubmit}>
      {error && console.log(error.message)}
      {msg ? <h4>{msg}</h4> : <h4>Message not posted</h4>}
      <FormGroup>
      <label>Name</label>
      <InputField type="text" onChange={(e) => setName(e.target.value)}/>
      </FormGroup>
      <FormGroup>
      <label>Location</label>
      <InputField type="text" onChange={(e) => setLocation(e.target.value)}/>
      </FormGroup>
      <FormGroup>
      <label>Description</label>
      <InputField type="text" onChange={(e) => setDescription(e.target.value)}/>
      </FormGroup>
      {/* <FormGroup>
      <label>Services</label>
      <SelectField onChange={(e) => setServices(e.target.value)}>
        <option>Regular</option>
        <option>VIP</option>
      </SelectField>
      </FormGroup> */}
      <FormGroup>
      <label>Images</label>
      <InputField type="file" onChange={changeHandler}/>
      {err && <h1>{err}</h1>}
      </FormGroup>
      <StyledButton mt="30px" ht="35px" wt="100%">Submit</StyledButton>
    </StyledForm>
  )
}

export default UploadForm
