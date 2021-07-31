import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Favorites from './pages/Favorites/Favorites';
import Locations from './pages/Locations/Locations';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SingleRestaurant from './pages/SingleRestaurant/SingleRestaurant';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
      <Route component={WelcomePage} exact path='/'/>
      {/* <Route component={Home} path='/home' /> */}
      <PrivateRoute path='/home'>
        <Home />
      </PrivateRoute>
      <Route component={Favorites} path='/favorites' />
      <Route component={Locations} path='/locations' />
      <Route component={Profile} path='/profile' />
      <Route component={Register} path='/register' />
      <Route component={Login} path='/login' />
      <Route component={SingleRestaurant} path='/restaurant/:id' />
      <Route component={Error} path='*' />  
      </Switch>
    </Router>
  );
}

export default App;
