import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component ={Login} />
        <Route path="/register" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
