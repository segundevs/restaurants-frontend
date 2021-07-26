import { createContext, useState, useContext} from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const registerUser = async (username, email, password) => {
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:1337/auth/local/register', {
        username: username,
        email: email,
        password: password
      })

      setLoading(false)
      setUser(res.data)
      
    } catch (err) {
      setError(err)
    }
  }


  const loginUser = async(email, password) => {
    try {
      // setLoading(true)
      const res = await axios.post('http://localhost:1337/auth/local', {
        identifier: email,
        password: password
      }
      // , {headers: {
      //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywia…1MTZ9.hteX2kckuoQkBgbAHRPbGM0-9IpF_ONXKyFyQ81Huuo'
      // }}
      )
      
      // setLoading(false)
      setUser(res.data.user)
      
    } catch (err) {
      setError(err)  
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
