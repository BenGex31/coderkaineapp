import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import colors from '../../utils/style/colors';
import AuthUser from '../../context/AuthUser';
import './Home.css';
import axios from 'axios';
import TableEmployees from '../../components/TableEmployees/TableEmployees';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

const Home = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);
  const { apiInfo } = useContext(AuthUser);

  const companyId = apiInfo.company.id;
  const authToken = apiInfo.authToken;

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

  const displayList = () => {
    if (isDataLoading) {
      return <LinearProgress />;
    } else {
      return <TableEmployees rows={employeesList} />;
    }
  };

  return (
    <div className="containerMainHome">
      <NavBar />
      <Container maxWidth="lg">
        <div className="containerListEmployees">
          <div style={{ paddingBottom: 22, paddingTop: 22 }}>
            <h2 style={{ fontSize: 16 }}>Liste des employés</h2>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontSize: 13,
                color: colors.lightBlue,
              }}
            >
              {employeesList.length <= 1
                ? employeesList.length + ' résultat'
                : employeesList.length + ' résultats'}
            </span>
          </div>
          <div>{displayList()}</div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
