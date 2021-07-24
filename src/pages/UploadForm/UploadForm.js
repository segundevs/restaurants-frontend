import React, { useState } from 'react';
import { StyledButton } from '../../components/Button';
import { StyledForm, FormGroup, InputField, SelectField } from './UploadForm.style';




const UploadForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [services, setServices] = useState('Regular');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const initialData = {
    name,
    location,
    description,
    services,
    images,
    error
  }


  const types = ['image/jpeg', 'image/png'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    console.log(initialData)
    
  }

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    setImages(selected);
      setError('');

    if(selected && types.includes(selected.type)){
      
    } else {
      setImages(null)
      setError('Please upload a valid file format jpeg or png')
    }
    
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
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
      <FormGroup>
      <label>Services</label>
      <SelectField onChange={(e) => setServices(e.target.value)}>
        <option>Regular</option>
        <option>VIP</option>
      </SelectField>
      </FormGroup>
      <FormGroup>
      <label>Images</label>
      <InputField type="file" onChange={changeHandler}/>
      {error && <h1>{error}</h1>}
      </FormGroup>
      <StyledButton mt="30px" ht="35px" wt="100%">Submit</StyledButton>
    </StyledForm>
  )
}

export default UploadForm
