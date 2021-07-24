import React from 'react';
import { Link } from 'react-router-dom';
import {IconContext} from "react-icons";
import {MdHome, MdFavorite, MdLocationOn, MdPerson} from 'react-icons/md';
import { StyledHeader, Nav, iconStyle } from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Link to="/home">
          <IconContext.Provider value={iconStyle}>
            <MdHome />
          </IconContext.Provider>
        </Link>
        <Link to="/favorites">
          <IconContext.Provider value={iconStyle}>
            <MdFavorite />
          </IconContext.Provider>
        </Link>
        <Link to="/locations">
          <IconContext.Provider value={iconStyle}>
            <MdLocationOn />
          </IconContext.Provider>
        </Link>
        <Link to="/profile">
          <IconContext.Provider value={iconStyle}>
            <MdPerson />
          </IconContext.Provider>
        </Link>
      </Nav>
    </StyledHeader>
  )
}

export default Header
