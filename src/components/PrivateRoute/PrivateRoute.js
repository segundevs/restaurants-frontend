import {Route, Redirect} from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';

const PrivateRoute = ({children, ...rest}) => {

const {user} = useAuth();
  return (
    <Route {...rest}
    render={() => (user ? children : <Redirect to='/login' />)}/>
  )
}

export default PrivateRoute
