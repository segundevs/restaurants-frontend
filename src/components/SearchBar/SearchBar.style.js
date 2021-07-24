import styled from 'styled-components';

export const StyledSearchBar = styled.input`
  display: hidden;

  @media only screen and (max-width: 768px){
    width: 76%;
    display: block;
    margin: 8px auto;
    border-radius: 5px;
    padding: 7px;
    outline: none;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
  }
`