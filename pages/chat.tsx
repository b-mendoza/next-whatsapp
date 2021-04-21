import { GetServerSideProps } from 'next';
import nookies from 'nookies';

import { useAuth } from 'hooks/useAuth';

import { verifyIdToken } from '@/lib/firebase/admin';

import Sidebar from 'components/Sidebar';

const Chat = () => {
  const { user, signOut } = useAuth();

  return (
    <>
      <h1>Chat Page - {user?.displayName}</h1>

      <button type="button" onClick={signOut}>
        Sign Out
      </button>

      <Sidebar />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const cookies = nookies.get(context);

    await verifyIdToken({ idToken: cookies.__ID_TOKEN__ });

    return {
      props: {},
    };
  } catch (error) {
    console.error(error);

    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
      props: {},
    };
  }
};

export default Chat;
