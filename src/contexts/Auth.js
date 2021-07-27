import { createContext, useState, useContext} from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  //Register a new user
  const registerUser = async (username, email, password) => {
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:1337/auth/local/register', {
        username: username,
        email: email,
        password: password
      })
      setUser(res.data)
      setLoading(false)
      
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  //Login a user
  const loginUser = async(email, password) => {
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:1337/auth/local', {
        identifier: email,
        password: password
      })
      setUser(res.data)
      setLoading(false)
      
    } catch (err) {
      setError(err)
      setLoading(false)  
    }
  }



  const value = {
    loading,
    error,
    user,
    registerUser,
    loginUser
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
