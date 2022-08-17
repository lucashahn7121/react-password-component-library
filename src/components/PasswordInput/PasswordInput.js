import React from 'react';
import TextField from '@mui/material/TextField';

const PasswordInput = ({isError = false, errorMsg = '', value = '', onChange = () => {}}) => {
  return (
    <TextField
      id="standard-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="standard"
      error={isError}
      helperText={errorMsg}
      margin='normal'
      value={value}
      onChange={onChange}
    />
  );
}

export default PasswordInput;