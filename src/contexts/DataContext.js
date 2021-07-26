import React, { createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext)
}



const DataContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestarants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
      getRestaurants()
  }, []);

  const getRestaurants = async()=>{
    setLoading(true)
     try{
    const result = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/restaurants`);
    const data = await result.data;
      setLoading(false);
      setRestarants(data);
     } catch(err){
      setLoading(false);
      setError(err);
     }
  }

  const addRestaurant = (data) => {
    const res = JSON.stringify(data)
    setLoading(true)
    const postData = async() => {
      await axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/restaurants`, res, {headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_ADMIN_JWT_SECRET}` 
    }})
    getRestaurants();
    }
    setLoading(false)
    postData();
  }

const values = {
  loading,
  restaurants,
  error,
  getRestaurants,
  addRestaurant,
}


  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider

