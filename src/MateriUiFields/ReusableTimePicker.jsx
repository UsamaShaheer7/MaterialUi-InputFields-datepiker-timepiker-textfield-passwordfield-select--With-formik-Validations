// ReusableTimePicker.js
import React from "react";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const ReusableTimePicker = ({
  label,
  name,
  onChange,
  value,
  error,
  errorMessage,
  ...rest
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["TimePicker"]}
          sx={{
            width: "100%",
            // paddingTop: "5px",
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#FB1E1E" : "#113D4E",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#FB1E1E" : "#113D4E",
            },
          }}
        >
          <TimePicker
            label={
              <span
                style={{
                  color: error ? "#FB1E1E" : "#113D4E",
                }}
              >
                {label}
              </span>
            }
            value={value}
            onChange={onChange}
            name={name}
            slotProps={{ textField: { size: "small" } }}
            fullWidth
            sx={{
              width: "100%",
              "& .MuiIconButton-root svg": {
                fill: error ? "#FB1E1E" : "#113D4E",
              },
              "& .MuiInputBase-root": {
                color: "#113D4E",
                fontWeight: "400",
                margin: 0,
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: error ? "#FB1E1E" : "#113D4E",
              },
              // "& .MuiInputBase-input": {
              //   height: "15px",
              // },
            }}
            {...rest}
          />
        </DemoContainer>
      </LocalizationProvider>
      <div className=" text-[11px] ml-[15px] mt-[1px] font-normal  text-[#FB1E1E]">
        {errorMessage}
      </div>
    </>
  );
};

export default ReusableTimePicker;
