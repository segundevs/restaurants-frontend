import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const SingleRestaurant = () => {
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestarant] = useState([]);
  const [error, setError] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    //Get single restaurant
  const getSingleRestaurant = async()=>{
    setLoading(true)
     try{
    const result = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/restaurants/${id}`);
    const data = await result.data;
      setLoading(false);
      setRestarant(data);
     } catch(err){
      setLoading(false);
      setError(err);
     }
  }

  getSingleRestaurant()
  }, [id])

  

  return (
    <div>
     Restaurant - {id}
     {loading && <h5>Data is loading...</h5>}
     {error && console.log(error)}
     {console.log(restaurant)} 
    <Header />
    </div>
  )
}

export default SingleRestaurant
