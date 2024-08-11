import React from 'react';
import { Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';

const PhoneInput = ({
  label,
  name,
  error,
  value,
  onChange,
  onBlur,
  errorMessage,
  disabled,
  ...rest
}) => {
  return (
    <div className="mt-[8px]">
      <MuiTelInput
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
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        size="small"
        fullWidth
        variant="outlined"
        defaultCountry="pk"
        InputProps={{
          style: {
            color: error ? '#FB1E1E' : '#113D4E',
            borderColor: error ? '#FB1E1E' : '#113D4E',
            background: disabled ? '#F5F5FA' : 'white',
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
      />
    </div>
  );
};

export default PhoneInput;
