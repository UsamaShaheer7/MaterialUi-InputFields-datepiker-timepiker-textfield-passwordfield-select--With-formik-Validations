// ReusableDatePicker.js
import React from 'react';
import { DatePicker as InputDatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const DatePicker = ({
  label,
  name,
  onChange,
  value,
  error,
  disabled,
  maxDate,
  minDate,
  disablePast,
  disableFuture,
  errorMessage,
  ...rest
}) => {
  const handleContainerKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Optionally move to next input or do nothing
    }
  };

  return (
    <div onKeyDown={handleContainerKeyPress}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{
          width: '100%',
        }}
      >
        <DemoContainer
          components={['DatePicker']}
          sx={{
            //paddingTop: "5px",
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#FB1E1E' : '#113D4E',
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#FB1E1E' : '#113D4E',
            },
          }}
        >
          <InputDatePicker
            label={
              <span
                style={{
                  color: error ? '#FB1E1E' : '#113D4E',
                }}
              >
                {label}
              </span>
            }
            name={name}
            value={value}
            onChange={onChange}
            format="DD/MM/YYYY"
            disableFuture={disableFuture}
            disablePast={disablePast}
            disabled={disabled}
            maxDate={maxDate}
            minDate={minDate}
            slotProps={{ textField: { size: 'small' } }}
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
    </div>
  );
};

export default DatePicker;
