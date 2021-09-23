import React, { useContext } from 'react';
import Auth from '../../context/Auth';
import { logout } from '../../utils/API/AuthApi';
import logoCoderKaine from '../../assets/logo/logo-coderkaine.svg';
import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const handleLogOut = () => {
    logout();
    setIsAuthenticated(false);
    console.log('Déconnexion');
  };

  return (
    <div className="containerNavBarHome">
      <div className="containerNavBarLeft">
        <img
          style={{ width: 33, height: 33 }}
          src={logoCoderKaine}
          alt="logo CoderKaine"
        />
      </div>
      <div className="containerNavBarRight">
        <span>Bonjour User</span>
        <span onClick={handleLogOut}>Se déconnecter</span>
      </div>
    </div>
  );
};

export default NavBar;
