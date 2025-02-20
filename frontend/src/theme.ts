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
    h2: {
      fontSize: '1rem',
      fontWeight: 700,
      color: COLORS.INFO,
      marginBottom: '1rem',
    },
    body1: {
      fontWeight: 700,
    },
    caption: {
      fontSize: '1rem',
      color: COLORS.SECONDARY,
      fontWeight: 700,
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
      primary: COLORS.DARK,
      secondary: COLORS.DARK,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          padding: '10px',
          '& a': {
            color: COLORS.LIGHT,
          },
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
    MuiFormControl: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        sx: {
          alignSelf: 'center',
        },
      },
    },
  },
});
