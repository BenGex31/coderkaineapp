import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import colors from '../../utils/style/colors';

const IconClose = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      size="large"
      color="inherit"
      aria-label="close drawer"
    >
      <CloseIcon
        sx={{ width: 15.38, height: 15.38, color: colors.lightBlue }}
      />
    </IconButton>
  );
};

export default IconClose;
