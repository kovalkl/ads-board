import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
    },
  },
  palette: {
    primary: {
      main: '#007550',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D32F2F',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          padding: '10px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        sx: {
          display: 'inline',
        },
      },
    },
  },
});
