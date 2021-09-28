import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';
import axios from 'axios';
import TableEmployees from '../../components/TableEmployees/TableEmployees';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import SwipeableTemporaryDrawer from '../../components/Drawer/SwipeableTemporaryDrawer';
import TitleH2 from '../../components/Titles/TitleH2';
import NumberResults from '../../components/Results/NumberResults';
import Auth from '../../context/Auth';
import { getItem } from '../../utils/LocalStorage/LocalStorage';
import { fetchEmployees } from '../../utils/API/FetchEmployees';

const Home = () => {
  const { currentUser, setEmployees } = useContext(Auth);
  const [employeesList, setEmployeesList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [employeeLastName, setEmployeeLastName] = useState(
    currentUser?.lastname || ''
  );
  const [employeeFirstname, setEmployeeFirstName] = useState(
    currentUser?.firstname || ''
  );

  let companyId;
  //console.log('getItem ', getItem('companyId'));
  let authToken;
  if (currentUser) {
    if (currentUser.company) {
      companyId = currentUser.company.id;
      //console.log('companyId1', companyId);
    } else {
      companyId = getItem('companyId');
      //console.log('companyId2', companyId);
    }
    authToken = currentUser.authToken;
  }

  useEffect(() => {
    fetchEmployees(
      companyId,
      authToken,
      setEmployeesList,
      setEmployees,
      setDataLoading
    );
  }, [setEmployeesList, setEmployees, authToken, companyId]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    //console.log('event', event);
    setIsOpenDrawer(open);
  };

  const displayList = () => {
    if (isDataLoading) {
      return <LinearProgress />;
    } else {
      return (
        <TableEmployees
          openDrawer={toggleDrawer(true)}
          employees={employeesList}
        />
      );
    }
  };

  const onChangeLastName = (text) => {
    setEmployeeLastName(text.target.value);
  };

  const onChangeFirstName = (text) => {
    setEmployeeFirstName(text.target.value);
  };

  const setUser = async () => {
    try {
      await axios.patch(
        `https://api-pp.hifivework.com/apiv1/auth/${currentUser.id}`,
        { firstname: employeeFirstname, lastname: employeeLastName },
        {
          headers: {
            Authorization: `Bearer ${currentUser.authToken}`,
            Accept: '*/*',
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="containerMainHome">
      <NavBar />
      <Container maxWidth="lg">
        <div className="containerListEmployees">
          <div
            style={{
              paddingBottom: 22,
              paddingTop: 22,
            }}
          >
            <TitleH2 text="Liste des employés" />
            <NumberResults list={employeesList} />
          </div>
          <div>{displayList()}</div>
          <SwipeableTemporaryDrawer
            anchor="right"
            isOpenDrawer={isOpenDrawer}
            onCloseDrawer={toggleDrawer(false)}
            onOpenDrawer={toggleDrawer(true)}
            closeDrawer={toggleDrawer(false)}
            listEmployees={employeesList}
            onChangeLastName={onChangeLastName}
            onChangeFirstName={onChangeFirstName}
            setUser={() => {
              setUser();
              fetchEmployees(
                companyId,
                authToken,
                setEmployeesList,
                setEmployees,
                setDataLoading
              );
              toggleDrawer(false);
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
