import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
const ReuseablePasswordField = ({
  label,
  name,
  error,
  value,
  onChange,
  onBlur,
  errorMessage,
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <FormControl
        variant="outlined"
        sx={{
          width: "100%",
          //paddingTop: "5px",
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#FB1E1E" : "#113D4E",
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#FB1E1E" : "#113D4E",
          },
        }}
        size="small"
      >
        <InputLabel htmlFor="outlined-adornment-password">
          <span
            style={{
              color: error ? "#FB1E1E" : "#113D4E",
            }}
          >
            {label}
          </span>
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          InputProps={{
            sx: {
              color: "#113D4E",
              fontWeight: "400",
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff
                    style={{
                      color: error ? "#FB1E1E" : "#113D4E",
                    }}
                  />
                ) : (
                  <Visibility
                    style={{
                      color: error ? "#FB1E1E" : "#113D4E",
                    }}
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
          label={label}
          fullWidth
          {...rest}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#FB1E1E" : "#113D4E",
            },
          }}
        />
      </FormControl>
      <div className=" text-[11px] ml-[15px] mt-[1px] font-normal  text-[#FB1E1E]">
        {errorMessage}
      </div>
    </>
  );
};

export default ReuseablePasswordField;
