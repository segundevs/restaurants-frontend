import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { StyledHome} from './Home.style'
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';


const Home = () => { 
  return (
       <StyledHome>
      <h3>Places</h3>
      <SearchBar />
        <Card data error loading/>
      <Header />
      </StyledHome>
  )
}

export default Home