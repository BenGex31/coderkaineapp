import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldInput = ({ id, label, variant, onChange }) => {
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

export default TextFieldInput;
