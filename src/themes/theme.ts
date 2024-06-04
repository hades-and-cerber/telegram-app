import { createTheme } from '@mui/material/styles';

export const createMUITheme = (themeParams: ThemeParams) => createTheme({
  palette: {
    primary: {
      main: themeParams.text_color || '#0088cc', // Default to Telegram blue
    },
    background: {
      default: themeParams.bg_color || '#ffffff', // Background color
      paper: themeParams.secondary_bg_color || '#f9f9f9', // Paper background
    },
    text: {
      primary: themeParams.text_color || '#2c3e50', // Text color
      secondary: themeParams.hint_color || '#7f8c8d', // Secondary text color
    },
    divider: '#e0e0e0', // Divider color
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  spacing: 8,
});
