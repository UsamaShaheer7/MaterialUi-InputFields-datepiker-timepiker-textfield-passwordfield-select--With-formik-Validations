import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { TextField, Typography } from "@mui/material";

const ReusableAutocomplete = ({
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
    <Autocomplete
      disablePortal
      id={id}
      value={value}
      getOptionLabel={(option) => option.label}
      onChange={onChange}
      options={options}
      size="small"
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={
            <span
              style={{
                color: error ? "#FB1E1E" : "#113D4E",
              }}
            >
              {label}
            </span>
          }
          error={error}
          helperText={
            <Typography
              sx={{
                color: error ? "#FB1E1E" : "#113D4E",
                fontSize: "11px",
                marginLeft: "-12px",
              }}
            >
              {errorMessage}
            </Typography>
          }
          variant="outlined"
          size="small"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          filterOptions={(options, { inputValue }) => {
              return options.filter((option) =>
                option.label.toLowerCase().includes(inputValue.toLowerCase())
              );
            }}
        />
      )}
      sx={{
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: error ? "#FB1E1E" : "#113D4E",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: error ? "#FB1E1E" : "#113D4E",
        },
        "& .MuiInputBase-root": {
          color: "#113D4E",
          fontWeight: "400",
        },
        "& .MuiOutlinedInput-root .MuiSvgIcon-root": {
          fill: error ? "#FB1E1E" : "#113D4E",
        },
      }}
      {...rest}
    />
  );
};

export default ReusableAutocomplete;
