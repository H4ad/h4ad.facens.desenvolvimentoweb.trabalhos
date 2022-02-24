import { Theme as MuiTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme { }
}

declare module '@mui/material/styles' {
  interface Theme {}
}

export const muiTheme =
  createTheme({
    palette: {
      mode: 'dark',
    },
  });
