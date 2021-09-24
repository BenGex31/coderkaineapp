import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import TitleH2 from '../Titles/TitleH2';

const SwipeableTemporaryDrawer = ({
  anchor,
  isOpenDrawer,
  onCloseDrawer,
  onOpenDrawer,
}) => {
  const list = () => (
    <Box
      sx={{ width: 404 }}
      role="presentation"
      //onClick={toggleDrawer(anchor, false)}
      //onKeyDown={toggleDrawer(anchor, false)}
    >
      <TitleH2 text="Modification d’un employé" />
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
