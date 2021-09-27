import React from 'react';

export default React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value) => {},
  currentUser: null,
  setCurrentUser: (value) => {},
  employees: null,
  setEmployees: (value) => {}
});
