import * as React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export default function TextArea({
  name,
  value,
  error,
  placeholder,
  minRows,
  onChange,
  onBlur,
  errorMessage,
}) {
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(TextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 6px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: ${error ? '1px solid #FB1E1E' : '1px solid #08214F'};
    

    &:hover {
      border-color:${error ? ' #FB1E1E' : ' #08214F'};
    }

    &:focus {
        border-color:${error ? ' #FB1E1E' : ' #08214F'};
     
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  return (
    <>
      <Textarea
        aria-label="minimum height"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        minRows={minRows}
        placeholder={placeholder}
      />
      <div className=" text-[11px]  font-normal  text-[#FB1E1E]">
        {errorMessage}
      </div>
    </>
  );
}
