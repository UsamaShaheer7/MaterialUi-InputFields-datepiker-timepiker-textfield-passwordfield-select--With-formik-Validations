// ReusableSelect.js
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
const ReusableSelect = ({
  labelId,
  onChange,
  value,
  label,
  id,
  onBlur,
  error,
  errorMessage,
  name,
  options,
  ...rest
}) => {
  return (
    <>
      <FormControl
        fullWidth
        size="small"
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
        }}
      >
        <InputLabel id={labelId}>
          <span
            style={{
              color: error ? "#FB1E1E" : "#113D4E",
              background: "white",
            }}
          >
            {label}
          </span>
        </InputLabel>
        <Select
          labelId={labelId}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          size="small"
          sx={{
            "& .MuiSelect-icon": {
              color: error ? "#FB1E1E" : "#113D4E",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#FB1E1E" : "#113D4E",
            },
          }}
          {...rest}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText
          sx={{
            color: error ? "#FB1E1E" : "#113D4E",
          }}
        >
          {errorMessage}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default ReusableSelect;
