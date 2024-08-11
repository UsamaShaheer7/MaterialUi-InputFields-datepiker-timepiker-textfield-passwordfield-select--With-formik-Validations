// ReusableSelect.js
import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as InputSelect,
} from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
const Select = ({
  labelId,
  onChange,
  value,
  label,
  id,
  onBlur,
  error,
  loading,
  multiple,
  errorMessage,
  name,
  options,
  ...rest
}) => {
  return (
    <>
      <div className=" mt-[8px]">
        <FormControl
          fullWidth
          size="small"
          sx={{
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#FB1E1E' : '#113D4E',
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#FB1E1E' : '#113D4E',
            },
            '& .MuiInputBase-root': {
              color: '#113D4E',
              fontWeight: '400',
              background: 'white',
            },
          }}
        >
          <InputLabel id={labelId}>
            <span
              style={{
                color: error ? '#FB1E1E' : '#113D4E',
                background: 'white',
              }}
            >
              {label}
            </span>
          </InputLabel>
          <InputSelect
            labelId={labelId}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            multiple={multiple}
            size="small"
            sx={{
              '& .MuiSelect-icon': {
                color: error ? '#FB1E1E' : '#113D4E',
              },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#FB1E1E' : '#113D4E',
              },
            }}
            {...rest}
          >
            {loading ? (
              <MenuItem disabled>Loading...</MenuItem>
            ) : options.length > 0 ? (
              options?.map((option, index) => (
                <MenuItem key={index} value={option?.value}>
                  {option?.label}
                </MenuItem>
              ))
            ) : (
              <MenuItem>No Records Found</MenuItem>
            )}
          </InputSelect>
          <FormHelperText
            sx={{
              color: error ? '#FB1E1E' : '#113D4E',
              marginLeft: '0px',
            }}
          >
            {errorMessage}
          </FormHelperText>
        </FormControl>
      </div>
    </>
  );
};

export default Select;
