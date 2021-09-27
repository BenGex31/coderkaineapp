import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { hasAuthenticated } from './utils/API/AuthApi';
import Auth from './context/Auth';
import AutenticatedRoute from './components/AuthenticatedRoute/AutenticatedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  const [currentUser, setCurrentUser] = useState(null);
  //const [employees, setEmployees] = useState(null)
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <AutenticatedRoute exact path="/home" component={Home} />
          </Switch>
        </Router>
    </Auth.Provider>
  );
}

export default App;
