import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import colors from '../../utils/style/colors';

const IconEdit = ({ onClick, text }) => {
  return (
    <IconButton
      onClick={onClick}
      size="small"
      color="inherit"
      aria-label="edit user"
    >
      <EditIcon sx={{ width: 15, height: 15, color: colors.darkBlue }} />
      <span style={{ fontSize: 13, color: colors.darkBlue }}>{text}</span>
    </IconButton>
  );
};

export default IconEdit;
