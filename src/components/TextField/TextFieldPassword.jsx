import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const TextFieldPassword = ({
  id,
  type,
  value,
  onChange,
  onClick,
  onMouseDown,
  visibility,
  label,
}) => {
  return (
    <FormControl variant="outlined">
      <InputLabel
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        htmlFor="outlined-adornment-password"
      >
        Mot de passe
      </InputLabel>
      <OutlinedInput
        label={label}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              onMouseDown={onMouseDown}
              edge="end"
            >
              {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default TextFieldPassword;
