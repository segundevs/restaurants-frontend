import styled from 'styled-components';

const StyledSearchBar = styled.input`
    width: 100%;
    display: block;
    margin: 8px auto;
    border-radius: 5px;
    padding: 7px;
    outline: none;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
`

const SearchBar = () => {
  return (
    <StyledSearchBar type="text" placeholder="Search restaurants" />
  )
}

export default SearchBar
