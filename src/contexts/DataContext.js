import { createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useAuth } from './Auth';

export const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext)
}



const DataContextProvider = ({children}) => {
  const {token} = useAuth();

  

  const [loading, setLoading] = useState(false);
  const [restaurants, setRestarants] = useState([]);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(()=>{
      getRestaurants()
  }, []);

  //Get all restaurants
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

  

  //Add a restaurant
  const addRestaurant = (data, image) => {
    const formData = new FormData()
    formData.append('file', image)

    setLoading(true)
    const postData = async() => {
      await axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/restaurants`, data, {headers: {
    'Authorization': `Bearer ${token}` 
    }})
      await axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/upload`, formData, {headers: {
    'Authorization': `Bearer ${token}`
      }})
    setMsg('Data successfully posted');
    getRestaurants();
    }
    setLoading(false)
    postData();
  }

const values = {
  msg,
  loading,
  restaurants,
  error,
  getRestaurants,
  addRestaurant
}


  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider

