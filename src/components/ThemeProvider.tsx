import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const PrefersDarkModeContext = React.createContext(null);

export const CustomThemeProvider: React.FC = (props) => {
  const prefersDarkModeOriginal = useMediaQuery(
    '(prefers-color-scheme: dark)',
    { noSsr: true }
  );
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(
    prefersDarkModeOriginal
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: { main: prefersDarkMode ? '#52A6FB' : '#0067D3' },
          secondary: { main: prefersDarkMode ? '#a1887f' : '#5d4037' },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrefersDarkModeContext.Provider
          value={{
            prefersDarkMode,
            setPrefersDarkMode,
          }}>
          {props.children}
        </PrefersDarkModeContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
