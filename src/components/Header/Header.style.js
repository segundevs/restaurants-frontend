import styled from 'styled-components';


export const StyledHeader = styled.header`
  background-color: #323232;
  @media only screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 25px;
  }
 
`

export const Nav = styled.nav`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #323232;
    padding: 12px 5px 7px 5px;
    border-radius: 15px 15px 0 0;
    
  }
`

export const iconStyle = {
  color: '#828282',
  size: '20'
}