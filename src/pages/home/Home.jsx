import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
//import AuthUser from '../../context/AuthUser';
import './Home.css';
import axios from 'axios';
import TableEmployees from '../../components/TableEmployees/TableEmployees';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import SwipeableTemporaryDrawer from '../../components/Drawer/SwipeableTemporaryDrawer';
import TitleH2 from '../../components/Titles/TitleH2';
import NumberResults from '../../components/Results/NumberResults';
import Auth from '../../context/Auth';

const Home = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { currentUser } = useContext(Auth);

  const companyId = currentUser.company.id;
  const authToken = currentUser.authToken;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          `https://api-pp.hifivework.com/apiv1/company/${companyId}/employees`,
          { headers: { Authorization: 'Bearer ' + authToken } }
        );
        setEmployeesList(response.data);
        console.log(employeesList);
        setDataLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployees();
  }, [companyId, authToken, employeesList]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpenDrawer(open);
  };

  const displayList = () => {
    if (isDataLoading) {
      return <LinearProgress />;
    } else {
      return (
        <TableEmployees onClick={toggleDrawer(true)} rows={employeesList} />
      );
    }
  };

  return (
    <div className="containerMainHome">
      <NavBar />
      <Container maxWidth="lg">
        <div className="containerListEmployees">
          <div style={{ paddingBottom: 22, paddingTop: 22 }}>
            <TitleH2 text="Modification d’un employé" />
            <NumberResults list={employeesList} />
          </div>
          <div>{displayList()}</div>
          <SwipeableTemporaryDrawer
            anchor="right"
            isOpenDrawer={isOpenDrawer}
            onCloseDrawer={toggleDrawer(false)}
            onOpenDrawer={toggleDrawer(true)}
            onClick={toggleDrawer(false)}
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
