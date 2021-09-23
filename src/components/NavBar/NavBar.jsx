import React, { useContext } from 'react';
import { logout } from '../../utils/API/AuthApi';
import logoCoderKaine from '../../assets/logo/logo-coderkaine.svg';
import './NavBar.css';
import AuthUser from '../../context/AuthUser';
import Auth from '../../context/Auth';

const NavBar = () => {
  const { setIsAuthenticated } = useContext(Auth);
  const { apiInfo } = useContext(AuthUser);
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
        <span>Bonjour {apiInfo.firstname} !</span>
        <span onClick={handleLogOut}>Se déconnecter</span>
      </div>
    </div>
  );
};

export default NavBar;
