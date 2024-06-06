// styles/theme.js
import { createTheme } from '@mui/material/styles';

// Define your custom breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,  // Set md to 991
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
