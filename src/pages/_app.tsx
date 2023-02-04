// custom app
import { AppProps } from 'next/app';
import { CustomThemeProvider as ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import { Container } from '@mui/material';
import { EmotionCache } from '@emotion/cache';
import { createEmotionCache } from '@/utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

// eslint-disable-next-line react/prop-types
const App: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
