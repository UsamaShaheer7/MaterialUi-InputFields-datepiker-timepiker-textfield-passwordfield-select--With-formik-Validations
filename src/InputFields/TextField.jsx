import React from 'react';
import { TextField as InputTextField, Typography } from '@mui/material';

const TextField = ({
  label,
  name,
  error,
  type = 'text',
  value,
  onChange,
  onBlur,
  focused,
  errorMessage,
  disabled,
  InputLabelProps,
  ...rest
}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Optionally move to next input or do nothing
    }
  };

  return (
    <div className="mt-[8px]">
      <InputTextField
        label={
          <span
            style={{
              color: error ? '#FB1E1E' : '#113D4E',
              // background:"#F5F5FA"
            }}
          >
            {label}
          </span>
        }
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        focused={focused}
        onBlur={onBlur}
        error={error}
        disabled={disabled}
        onKeyPress={handleKeyPress}
        fullWidth
        size="small"
        InputLabelProps={InputLabelProps}
        InputProps={{
          sx: {
            color: '#113D4E',
            fontWeight: '400',
            background: disabled ? '#F5F5FA' : 'white',
            textTransform: 'capitalize',
          },
        }}
        helperText={
          <Typography
            sx={{
              color: error ? '#FB1E1E' : '#113D4E',
              fontSize: '11px',
              marginLeft: '-12px',
            }}
          >
            {errorMessage}
          </Typography>
        }
        sx={{
          // paddingTop: "5px",
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#FB1E1E' : '#113D4E',
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#FB1E1E' : '#113D4E',
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default TextField;
