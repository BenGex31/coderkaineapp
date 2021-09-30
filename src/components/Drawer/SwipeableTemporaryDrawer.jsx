import React, { useContext } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import TitleH2 from '../Titles/TitleH2';
import Stack from '@mui/material/Stack';
import IconClose from '../icons/IconClose';
import colors from '../../utils/style/colors';
import TextFieldInput from '../TextField/TextField';
import Button from '../Button/Button';
/*import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Auth from '../../context/Auth';*/
import { EmployeesContext } from '../../context/Employees';

const SwipeableTemporaryDrawer = ({
  anchor,
  isOpenDrawer,
  onCloseDrawer,
  onOpenDrawer,
  closeDrawer,
  //onChangeLastName,
  //onChangeFirstName,
  onClick,
}) => {
  const { lastName, firstName, setLastName, setFirstName } =
    useContext(EmployeesContext);

  const onChangeLastName = (text) => {
    setLastName(text.target.value);
  };

  const onChangeFirstName = (text) => {
    setFirstName(text.target.value);
  };

  //const { currentUser } = useContext(Auth);

  return (
    <div>
      <SwipeableDrawer
        anchor={anchor}
        open={isOpenDrawer}
        onClose={onCloseDrawer}
        onOpen={onOpenDrawer}
      >
        <Box
          sx={{ width: 404 }}
          role="presentation"
          //onClick={toggleDrawer(anchor, false)}
          //onKeyDown={toggleDrawer(anchor, false)}
        >
          <Stack
            sx={{ paddingBottom: 10 }}
            direction="row"
            justifyContent="flex-end"
          >
            <IconClose onClick={closeDrawer} />
          </Stack>
          <Stack spacing={6} sx={{ paddingLeft: 5, paddingRight: 5 }}>
            <Stack spacing={1}>
              <TitleH2 text="Modification d’un employé" />
              <p
                style={{
                  color: colors.lightBlue,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                Une coquille s’est glissée dans le prénom ou le nom de votre
                employé ? Vous pouvez le modifier ci-dessous.
              </p>
            </Stack>
            <Stack spacing={3}>
              {/*<FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Employés
                </InputLabel>
                <Select
                  multiple
                  native
                  value={idEmployee}
                  onChange={handleChangeMultiple}
                  label="Employés"
                  inputProps={{
                    id: 'select-multiple-employees',
                  }}
                >
                  {listEmployees.map((employee) => (
                    <option
                      key={employee.id}
                      id={employee.id}
                      value={employee.fullName}
                    >
                      {employee.fullName}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <Stack direction="row" justifyContent="flex-end">
                <Button
                  variant="contained"
                  text="Valider"
                  style={{
                    backgroundColor: colors.darkBlue,
                    color: 'white',
                    width: 180,
                    height: 38,
                    fontSize: 14,
                    fontWeight: 400,
                    borderRadius: 5,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                />
              </Stack>*/}
              <TextFieldInput
                onChange={onChangeLastName}
                id="lastName"
                label="Nom"
                variant="outlined"
                defaultValue={lastName}
              />
              <TextFieldInput
                onChange={onChangeFirstName}
                id="firstName"
                label="Prénom"
                variant="outlined"
                defaultValue={firstName}
              />
            </Stack>
            <Stack direction="row" justifyContent="flex-end">
              <Button
                onClick={onClick}
                variant="contained"
                text="Modifier"
                style={{
                  backgroundColor: colors.darkBlue,
                  color: 'white',
                  width: 180,
                  height: 38,
                  fontSize: 14,
                  fontWeight: 400,
                  borderRadius: 5,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default SwipeableTemporaryDrawer;
