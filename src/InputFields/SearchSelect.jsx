import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

const SearchSelect = ({
  labelId,
  onChange,
  value,
  label,
  id,
  onBlur,
  error,
  loading,
  multiple,
  filterSelectedOptions,
  limitTags,
  disabled,
  errorMessage,
  name,
  options,
  ...rest
}) => {
  return (
    <div className=" mt-[8px]">
      <Autocomplete
        getOptionLabel={(option) => option.label}
        id={id}
        value={value}
        onChange={onChange}
        options={options}
        size="small"
        multiple={multiple}
        filterSelectedOptions={filterSelectedOptions}
        limitTags={limitTags}
        disabled={disabled}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              <span
                style={{
                  color: error ? '#FB1E1E' : '#113D4E',
                }}
              >
                {label}
              </span>
            }
            error={error}
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
            variant="outlined"
            size="small"
            InputProps={{
              ...params.InputProps,
              style: {
                background: disabled ? '#F5F5FA' : 'white',
              },
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            // renderTags={(tagValue, getTagProps) =>
            //   tagValue.map((option, index) => (
            //     <Chip
            //       key={index}
            //       label={option.label}
            //       {...getTagProps({ index })}
            //     />
            //   ))
            // }
            // filterOptions={(options, { inputValue }) => {
            //   return options.filter((option) =>
            //     option.label.toLowerCase().includes(inputValue.toLowerCase())
            //   );
            // }}
          />
        )}
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
          '& .MuiOutlinedInput-root .MuiSvgIcon-root': {
            fill: error ? '#FB1E1E' : '#113D4E',
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default SearchSelect;
