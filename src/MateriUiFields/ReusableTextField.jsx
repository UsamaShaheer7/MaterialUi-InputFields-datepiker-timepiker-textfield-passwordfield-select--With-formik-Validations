import React from "react";
import { TextField, Typography } from "@mui/material";

const ReusableTextField = ({
  label,
  name,
  error,
  value,
  onChange,
  onBlur,
  errorMessage,
  ...rest
}) => {
  return (
    <div className=" mt-[8px]">
      <TextField
        label={
          <span
            style={{
              color: error ? "#FB1E1E" : "#113D4E",
            }}
          >
            {label}
          </span>
        }
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        fullWidth
        size="small"
        InputProps={{
          sx: {
            color: "#113D4E",
            fontWeight: "400",
          },
        }}
        helperText={
          <Typography
            sx={{
              color: error ? "#FB1E1E" : "#113D4E",
              fontSize: "11px",
            }}
          >
            {errorMessage}
          </Typography>
        }
        sx={{
          // paddingTop: "5px",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#FB1E1E" : "#113D4E",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#FB1E1E" : "#113D4E",
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default ReusableTextField;
