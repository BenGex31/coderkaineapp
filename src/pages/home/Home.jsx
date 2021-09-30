import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';
import TableEmployees from '../../components/TableEmployees/TableEmployees';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import SwipeableTemporaryDrawer from '../../components/Drawer/SwipeableTemporaryDrawer';
import TitleH2 from '../../components/Titles/TitleH2';
import NumberResults from '../../components/Results/NumberResults';
import Auth from '../../context/Auth';
import { getItem } from '../../utils/LocalStorage/LocalStorage';
import { fetchEmployees } from '../../utils/API/FetchEmployees';
import IconEdit from '../../components/icons/IconEdit';
import MultipleSelect from '../../components/Select/MultipleSelect';
import { EmployeesContext } from '../../context/Employees';
import axios from 'axios';

const Home = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  /*const [employeeLastName, setEmployeeLastName] = useState(
    currentUser?.lastname || ''
  );
  const [employeeFirstname, setEmployeeFirstName] = useState(
    currentUser?.firstname || ''
  );*/

  const { currentUser } = useContext(Auth);
  const { idEmployee, lastName, firstName } = useContext(EmployeesContext);

  let companyId;
  //console.log('getItem ', getItem('companyId'));
  let authToken;
  if (currentUser) {
    if (currentUser.company) {
      companyId = currentUser.company.id;
    } else {
      companyId = getItem('companyId');
    }
    authToken = currentUser.authToken;
  }

  useEffect(() => {
    fetchEmployees(companyId, authToken, setEmployeesList, setDataLoading);
  }, [authToken, companyId, setEmployeesList]);

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
        <TableEmployees
          openDrawer={toggleDrawer(true)}
          employees={employeesList}
        />
      );
    }
  };

  const setUser = async () => {
    try {
      await axios.patch(
        `https://api-pp.hifivework.com/apiv1/auth/${idEmployee}`,
        { firstname: firstName, lastname: lastName },
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
    fetchEmployees(companyId, authToken, setEmployeesList, setDataLoading);
  };

  return (
    <div className="containerMainHome">
      <NavBar />
      <Container maxWidth="lg">
        <div className="containerListEmployees">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 180,
            }}
          >
            <div
              style={{
                paddingBottom: 22,
                paddingTop: 22,
              }}
            >
              <TitleH2 text="Liste des employés" />
              <NumberResults list={employeesList} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <IconEdit
                text="modifier un employé"
                onClick={toggleDrawer(true)}
              />
              <MultipleSelect employees={employeesList} />
            </div>
          </div>

          <div>{displayList()}</div>
          <SwipeableTemporaryDrawer
            anchor="right"
            isOpenDrawer={isOpenDrawer}
            onCloseDrawer={toggleDrawer(false)}
            onOpenDrawer={toggleDrawer(true)}
            closeDrawer={toggleDrawer(false)}
            onClick={setUser}
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
