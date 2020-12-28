// custom app
import React from 'react';
import { AppProps } from 'next/app';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import { loadCSS } from 'fg-loadcss';
import { Container, Divider, Typography } from '@material-ui/core';

// eslint-disable-next-line react/prop-types
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    // load FontAwesome.
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.15.1/css/all.css',
      document.querySelector('#font-awesome-css')
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <ThemeProvider>
      {/* <Header /> */}
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
