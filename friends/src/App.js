import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
            <Switch>
              <ProtectedRoute exact path='/protected' component={FriendsList} />
              <ProtectedRoute path='/logout'component={Logout} />
              <Route path='/login' component={Login} />
              <Route path='/' component={Login} />
            </Switch>
          
      </div>
    </Router>
    
  );
}

export default App;
