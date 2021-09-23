import React, { useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Auth from '../../context/Auth';
import colors from '../../utils/style/colors';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useContext(Auth);
  return (
    <div className="containerMainHome">
      <NavBar />
      <h1>Home</h1>
      liste des employés
    </div>
  );
};

export default Home;
