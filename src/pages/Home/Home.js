import React from 'react';
import SearchBar from '../../components/SearchBar';
import { StyledHome} from './Home.style'
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import {useData} from '../../contexts/DataContext';


const Home = () => {
  const {loading, restaurants, error} = useData(); 
  return (
      <StyledHome>
      <h3>Places</h3>
      <SearchBar />
        <Card data={restaurants} error={error} loading={loading}/>
      <Header />
      </StyledHome>
  )
}

export default Home