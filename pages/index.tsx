import Head from 'next/head';

import { useAuth } from 'hooks/useAuth';

const Home = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <>
      <Head>
        <title>Next WhatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home Page</h1>

      <button type="button" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </>
  );
};

export default Home;
