import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
const PasswordField = ({
  label,
  name,
  error,
  value,
  onChange,
  focused,
  onBlur,
  errorMessage,
  shrink,
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
          width: '100%',
          //background: 'white',
          //paddingTop: "5px",
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#FB1E1E' : '#113D4E',
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: error ? '#FB1E1E' : '#113D4E',
          },
        }}
        focused={focused}
        size="small"
      >
        <InputLabel htmlFor="outlined-adornment-password" shrink={shrink}>
          <span
            style={{
              color: error ? '#FB1E1E' : '#113D4E',
             // background:"#F5F5FA"
            }}
          >
            {label}
          </span>
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          InputProps={{
            sx: {
              color: '#113D4E',
              fontWeight: '400',
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
                  <Visibility
                    style={{
                      color: error ? '#FB1E1E' : '#113D4E',
                    }}
                  />
                ) : (
                  <VisibilityOff
                    style={{
                      color: error ? '#FB1E1E' : '#113D4E',
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
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? '#FB1E1E' : '#113D4E',
            },
          }}
        />
      </FormControl>
      <div className=" text-[11px] mt-[1px] font-normal  text-[#FB1E1E]">
        {errorMessage}
      </div>
    </>
  );
};

export default PasswordField;
