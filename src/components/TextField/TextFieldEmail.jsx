import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldEmail = ({ id, label, variant, onChange }) => {
  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      variant={variant}
      onChange={onChange}
    />
  );
};

export default TextFieldEmail;
