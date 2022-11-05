import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import lightTheme from "../styles/theme/lightTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../util/createEmotionCache";
import { TitleComponent } from "../components/Home/TitleComponent";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <TitleComponent title={"Home"} />
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
