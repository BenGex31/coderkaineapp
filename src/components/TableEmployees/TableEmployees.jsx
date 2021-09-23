import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import colors from '../../utils/style/colors';
import IconEdit from '../icons/IconEdit';

const stylesTableCellHead = {
  fontSize: 12,
  fontWeight: 600,
  fontFamily: 'Montserrat, sans-serif',
  color: colors.lightBlue,
  borderColor: colors.lightBlue,
};

const stylesTableCellBody = {
  borderColor: colors.lightBlue,
  fontSize: 12,
  fontWeight: 'normal',
  fontFamily: 'Montserrat, sans-serif',
};

const TableEmployees = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="employees list">
        <TableHead>
          <TableRow>
            <TableCell sx={stylesTableCellHead} align="left">
              Nom
            </TableCell>
            <TableCell sx={stylesTableCellHead} align="left">
              Prénom
            </TableCell>
            <TableCell sx={stylesTableCellHead} align="left">
              Email
            </TableCell>
            <TableCell sx={stylesTableCellHead}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell
                sx={stylesTableCellBody}
                align="left"
                component="th"
                scope="row"
              >
                {row.lastName}
              </TableCell>
              <TableCell sx={stylesTableCellBody} align="left">
                {row.firstName}
              </TableCell>
              <TableCell sx={stylesTableCellBody} align="left">
                {row.mail}
              </TableCell>
              <TableCell>
                <IconEdit />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableEmployees;
