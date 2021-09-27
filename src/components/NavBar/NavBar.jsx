import React, { useContext } from 'react';
import { logout } from '../../utils/API/AuthApi';
import logoCoderKaine from '../../assets/logo/logo-coderkaine.svg';
import './NavBar.css';
import Auth from '../../context/Auth';

const NavBar = () => {
  const { setIsAuthenticated, setCurrentUser, currentUser } = useContext(Auth);
  console.log(currentUser);
  const handleLogOut = () => {
    logout();
    setIsAuthenticated(false);
    setCurrentUser(null);
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
        <span>Bonjour {currentUser.firstname} ! </span>
        <span onClick={handleLogOut}>Se déconnecter</span>
      </div>
    </div>
  );
};

export default NavBar;
