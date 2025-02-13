import { createTheme } from '@mui/material/styles';

const COLORS = {
  PRIMARY: '#007550',
  SECONDARY: '#D32F2F',
  LIGHT: '#FFFFFF',
  INFO: '#808080',
  DARK: '#292929',
};

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      marginBottom: '2rem',
    },
  },
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    text: {
      primary: COLORS.LIGHT,
      secondary: COLORS.LIGHT,
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
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: COLORS.INFO,
          '&.Mui-active': {
            color: COLORS.PRIMARY,
          },
          '&.Mui-completed': {
            color: COLORS.INFO,
          },
        },
      },
    },
  },
});
