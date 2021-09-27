import React, { useContext } from 'react';
import Auth from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

const AutenticatedRoute = ({ path, component }) => {
  const { isAuthenticated } = useContext(Auth);

  return isAuthenticated ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

export default AutenticatedRoute;
