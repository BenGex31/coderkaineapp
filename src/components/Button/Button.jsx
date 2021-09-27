import React from 'react';
import Button from '@mui/material/Button';

const ButtonUI = ({ variant, text, onClick, disabled, style }) => {
  return (
    <Button
      disabled={disabled}
      variant={variant}
      style={style}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonUI;
