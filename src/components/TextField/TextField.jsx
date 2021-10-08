import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldInput = ({ id, label, variant, onChange, defaultValue }) => {
  return (
    <TextField
      sx={{ fontFamily: 'Montserrat, sans-serif', color: '#1C205F' }}
      id={id}
      label={label}
      variant={variant}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default TextFieldInput;
