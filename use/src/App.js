import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import ItemForm from './components/ItemForm';
import PrivateRoute from './PrivateRoute';
import Items from './components/Items';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/create-item">Create Item</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>

            </li>
          </ul>
        </nav>
        
        <Route exact path="/" component ={Login} />
        <Route path="/register" component={SignUp} />
        <PrivateRoute path="/items" component={Items} />
        <Route path='/create-item' component={ItemForm} />
        
      </div>
    </Router>
  );
}

export default App;
