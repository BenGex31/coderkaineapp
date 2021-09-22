import React, { useContext } from 'react';
import Auth from '../../context/Auth';
import { logout } from '../../utils/API/AuthApi';

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const handleLogOut = () => {
    logout();
    setIsAuthenticated(false);
    console.log('Déconnexion');
  };

  return (
    <div>
      <button onClick={handleLogOut}>Se déconnecter</button>
    </div>
  );
};

export default NavBar;
