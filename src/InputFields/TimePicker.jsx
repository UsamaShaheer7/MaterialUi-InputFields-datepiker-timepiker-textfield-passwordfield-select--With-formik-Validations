// ReusableTimePicker.js
import React from 'react';

import { TimePicker as InputTimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const TimePicker = ({
  label,
  name,
  onChange,
  value,
  error,
  minTime,
  maxTime,
  disabled,
  errorMessage,
  ...rest
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={['TimePicker']}
          sx={{
            width: '100%',
            // paddingTop: "5px",
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#FB1E1E' : '#113D4E',
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#FB1E1E' : '#113D4E',
            },
          }}
        >
          <InputTimePicker
            label={
              <span
                style={{
                  color: error ? '#FB1E1E' : '#113D4E',
                }}
              >
                {label}
              </span>
            }
            value={value}
            onChange={onChange}
            name={name}
            minTime={minTime}
            disabled={disabled}
            maxTime={maxTime}
            slotProps={{ textField: { size: 'small' } }}
            fullWidth
            sx={{
              width: '100%',
              '& .MuiIconButton-root svg': {
                fill: error ? '#FB1E1E' : '#113D4E',
              },
              '& .MuiInputBase-root': {
                color: '#113D4E',
                fontWeight: '400',
                margin: 0,
                background: disabled ? '#F5F5FA' : 'white',
              },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#FB1E1E' : '#113D4E',
              },
              // "& .MuiInputBase-input": {
              //   height: "15px",
              // },
            }}
            {...rest}
          />
        </DemoContainer>
      </LocalizationProvider>
      <div className=" text-[11px] mt-[1px] font-normal  text-[#FB1E1E]">
        {errorMessage}
      </div>
    </>
  );
};

export default TimePicker;
