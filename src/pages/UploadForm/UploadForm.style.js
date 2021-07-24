import styled from 'styled-components';

export const StyledForm = styled.form`
  display: hidden;

@media only screen and (max-width: 768px){
  width: 80vw;
  margin: 20px auto;
  }
`

export const FormGroup = styled.div`
  display: hidden;

@media only screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  }
`

export const InputField = styled.input`
  display: hidden;

@media only screen and (max-width: 768px){
    width: 98%;
    margin-top: 5px;
    border-radius: 5px;
    padding: 5px 2px;
    outline: none;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
  }
`

export const SelectField = styled.select`
  display: hidden;

@media only screen and (max-width: 768px){
    width: 100%;
    margin-top: 5px;
    border-radius: 5px;
    padding: 5px 2px;
    outline: none;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
  }
`