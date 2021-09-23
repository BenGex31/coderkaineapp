import React /*, { useContext }*/ from 'react';
import NavBar from '../../components/NavBar/NavBar';
//import Auth from '../../context/Auth';
import './Home.css';

const Home = () => {
  //const { isAuthenticated } = useContext(Auth);
  return (
    <div className="containerMainHome">
      <NavBar />
      <h1>liste des employés</h1>
    </div>
  );
};

export default Home;
