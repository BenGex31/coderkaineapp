import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import TitleH2 from '../Titles/TitleH2';
import Stack from '@mui/material/Stack';
import IconClose from '../icons/IconClose';
import colors from '../../utils/style/colors';
import TextFieldInput from '../TextField/TextField';

const SwipeableTemporaryDrawer = ({
  anchor,
  isOpenDrawer,
  onCloseDrawer,
  onOpenDrawer,
  onClick,
}) => {
  const list = () => (
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
        <IconClose onClick={onClick} />
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
            Une coquille s’est glissée dans le prénom ou le nom de votre employé
            ? Vous pouvez le modifier ci-dessous.
          </p>
        </Stack>
        <Stack spacing={3}>
          <TextFieldInput id="lastName" label="Nom" variant="outlined" />
          <TextFieldInput id="firstName" label="Prénom" variant="outlined" />
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor={anchor}
        open={isOpenDrawer}
        onClose={onCloseDrawer}
        onOpen={onOpenDrawer}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default SwipeableTemporaryDrawer;
