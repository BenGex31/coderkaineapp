import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import colors from '../../utils/style/colors';
//import IconEdit from '../icons/IconEdit';
import Auth from '../../context/Auth';

const stylesTableCellHead = {
  fontSize: 12,
  fontWeight: 600,
  fontFamily: 'Montserrat, sans-serif',
  color: colors.lightBlue,
  borderColor: colors.lightBlue,
};

const stylesTableCellBody = {
  borderColor: colors.lightBlue,
  color: colors.darkBlue,
  fontSize: 12,
  fontWeight: 'normal',
  fontFamily: 'Montserrat, sans-serif',
};

const stylesTableCellBodyUser = {
  borderColor: colors.lightBlue,
  color: colors.darkBlue,
  fontSize: 12,
  fontWeight: 700,
  fontFamily: 'Montserrat, sans-serif',
};

const TableEmployees = ({ employees, openDrawer }) => {
  const { currentUser } = useContext(Auth);

  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="employees list">
        <TableHead>
          <TableRow>
            <TableCell sx={stylesTableCellHead} align="center">
              Nom
            </TableCell>
            <TableCell sx={stylesTableCellHead} align="center">
              Prénom
            </TableCell>
            <TableCell sx={stylesTableCellHead} align="center">
              Email
            </TableCell>
            {/*<TableCell sx={stylesTableCellHead}></TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.id}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
              }}
            >
              <TableCell
                sx={
                  employee.id === currentUser.id
                    ? stylesTableCellBodyUser
                    : stylesTableCellBody
                }
                align="center"
                component="th"
                scope="row"
              >
                {employee.lastName}
              </TableCell>
              <TableCell
                sx={
                  employee.id === currentUser.id
                    ? stylesTableCellBodyUser
                    : stylesTableCellBody
                }
                align="center"
              >
                {employee.firstName}
              </TableCell>
              <TableCell
                sx={
                  employee.id === currentUser.id
                    ? stylesTableCellBodyUser
                    : stylesTableCellBody
                }
                align="center"
              >
                {employee.mail}
              </TableCell>
              {/*<TableCell>
                <IconEdit onClick={openDrawer} />
              </TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableEmployees;
