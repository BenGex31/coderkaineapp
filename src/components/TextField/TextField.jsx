import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldInput = ({ id, label, variant, onChange, defaultValue }) => {
  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      variant={variant}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default TextFieldInput;
