// custom app
import React from 'react';
import { AppProps } from 'next/app';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';

// eslint-disable-next-line react/prop-types
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};


export default App;
