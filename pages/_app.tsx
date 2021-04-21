import { AppProps } from 'next/app';
import { useEffect } from 'react';

import { AuthProvider } from 'contexts/AuthContext';

import { globalStyles } from '@/shared/styles';

const NextApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <>
      {globalStyles}

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
};

export default NextApp;
