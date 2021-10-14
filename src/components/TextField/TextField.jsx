import React from 'react';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

const TextFieldInput = ({
  id,
  label,
  variant,
  onChange,
  defaultValue,
  error,
  helperText,
  sx,
  sxHelperText,
  errorHelperText,
}) => {
  return (
    <>
      <TextField
        error={error}
        sx={sx}
        id={id}
        label={label}
        variant={variant}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      <FormHelperText sx={sxHelperText} error={errorHelperText}>
        {helperText}
      </FormHelperText>
    </>
  );
};

export default TextFieldInput;
