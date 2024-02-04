// ReusableDatePicker.js
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const ReusableDatePicker = ({
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
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{
          width: "100%",
        }}
      >
        <DemoContainer
          components={["DatePicker"]}
          sx={{
            //paddingTop: "5px",
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#FB1E1E" : "#113D4E",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#FB1E1E" : "#113D4E",
            },
          }}
        >
          <DatePicker
            label={
              <span
                style={{
                  color: error ? "#FB1E1E" : "#113D4E",
                }}
              >
                {label}
              </span>
            }
            name={name}
            value={value}
            onChange={onChange}
            format="DD/MM/YYYY"
            slotProps={{ textField: { size: "small" } }}
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

export default ReusableDatePicker;
