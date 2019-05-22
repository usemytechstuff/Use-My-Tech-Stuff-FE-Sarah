import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import ItemForm from './components/ItemForm';
import PrivateRoute from './PrivateRoute';
import Items from './components/Items';
// import Navigation from './components/Navigation';
import ItemDetail from './components/ItemDetail';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* <Navigation /> */}
          <ul>
            <li>
              <Link to="/create-item">Create Item</Link>
            </li>
            <li>
              <Link to='/items'>Home</Link>

            </li>
          </ul>
        </nav>
        
        <Route exact path="/" component ={Login} />
        <Route path="/register" component={SignUp} />
        <PrivateRoute path="/items" component={Items} />
        <Route path='/create-item' component={ItemForm} />
        <Route path = '/item-detail/:id' component={ItemDetail} />
        
      </div>
    </Router>
  );
}

export default App;
