import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
//import { hasAuthenticated } from './utils/API/AuthApi';
import Auth from './context/Auth';
import AutenticatedRoute from './components/AuthenticatedRoute/AutenticatedRoute';
import AuthUser from './context/AuthUser';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [apiInfo, setApiInfo] = useState(null);
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <AuthUser.Provider value={{apiInfo, setApiInfo}}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <AutenticatedRoute exact path="/home" component={Home} />
          </Switch>
        </Router>
        </AuthUser.Provider>
    </Auth.Provider>
  );
}

export default App;
