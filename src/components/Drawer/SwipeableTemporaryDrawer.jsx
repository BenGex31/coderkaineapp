import React, { useContext } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import TitleH2 from '../Titles/TitleH2';
import Stack from '@mui/material/Stack';
import IconClose from '../icons/IconClose';
import colors from '../../utils/style/colors';
import TextFieldInput from '../TextField/TextField';
import UpdateButton from '../Button/Button';
import Auth from '../../context/Auth';

const SwipeableTemporaryDrawer = ({
  anchor,
  isOpenDrawer,
  onCloseDrawer,
  onOpenDrawer,
  closeDrawer,
  listEmployees,
  onChangeLastName,
  onChangeFirstName,
  setUser,
}) => {
  const { currentUser } = useContext(Auth);

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
              <TextFieldInput
                onChange={onChangeLastName}
                id="lastName"
                label="Nom"
                variant="outlined"
                defaultValue={listEmployees
                  .filter((employee) => employee.id === currentUser.id)
                  .map((employee) => employee.lastName)}
              />
              <TextFieldInput
                onChange={onChangeFirstName}
                id="firstName"
                label="Prénom"
                variant="outlined"
                defaultValue={listEmployees
                  .filter((employee) => employee.id === currentUser.id)
                  .map((employee) => employee.firstName)}
              />
            </Stack>
            <Stack direction="row" justifyContent="flex-end">
              <UpdateButton
                onClick={setUser}
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
