import { PropsWithChildren } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const PrefersDarkModeContext = React.createContext(null);

export const CustomThemeProvider: React.FC<PropsWithChildren> = (props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [prefersDarkModeManual, setPrefersDarkModeManual] =
    React.useState(false);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode || prefersDarkModeManual ? 'dark' : 'light',
          primary: { main: prefersDarkMode ? '#52A6FB' : '#0067D3' },
          secondary: { main: prefersDarkMode ? '#a1887f' : '#5d4037' },
        },
      }),
    [prefersDarkMode, prefersDarkModeManual]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrefersDarkModeContext.Provider
          value={{
            prefersDarkMode: prefersDarkModeManual,
            setPrefersDarkMode: setPrefersDarkModeManual,
          }}>
          {props.children}
        </PrefersDarkModeContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
