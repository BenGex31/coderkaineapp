import React from 'react';
import Button from '@mui/material/Button';
import colors from '../../utils/style/colors';

const LoginButton = ({ variant, text, onClick }) => {
  return (
    <Button
      variant={variant}
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
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default LoginButton;
