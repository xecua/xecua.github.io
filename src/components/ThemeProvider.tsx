import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';

const CustomThemeProvider: React.FC = props => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: { main: prefersDarkMode ? '#1769aa' : '#ffffff' },
          secondary: { main: prefersDarkMode ? '#00b0ff' : '#2979ff' }
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {props.children}
    </ThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node
};

export default CustomThemeProvider;
