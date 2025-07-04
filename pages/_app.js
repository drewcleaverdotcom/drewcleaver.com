import '../styles/globals.css';
import { ThemeProvider } from '../components/ThemeContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import PlausibleProvider from 'next-plausible';
import Head from 'next/head';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}>
      <ThemeProvider>
        <Head>
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />

        {gtag.GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
            </Script>
          </>
        )}
      </ThemeProvider>
    </PlausibleProvider>
  );
}
