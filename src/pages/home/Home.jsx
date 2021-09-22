import React, { useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Auth from '../../context/Auth';

const Home = () => {
  const { isAuthenticated } = useContext(Auth);
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      liste des employés
    </div>
  );
};

export default Home;
