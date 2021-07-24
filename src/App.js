import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Favorites from './pages/Favorites/Favorites';
import Locations from './pages/Locations/Locations';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';

function App() {
  return (
    <Router>
      <Switch>
      <Route component={WelcomePage} path='/' exact/>
      <Route component={Home} path='/home' />
      <Route component={Favorites} path='/favorites' />
      <Route component={Locations} path='/locations' />
      <Route component={Profile} path='/profile' />
      <Route component={Error} path='*' />
      </Switch>
    </Router>
  );
}

export default App;
