import { createContext, useEffect, useState } from 'react';
import nookies from 'nookies';
import router from 'next/router';

import firebaseClient, { GOOGLE_AUTH_PROVIDER } from '@/lib/firebase/client';

type Props = {
  children: React.ReactNode;
};

type RedirectToProps = {
  pathname: string;
};

type AuthState = {
  user: firebaseClient.User | null;
  loading: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
  redirectTo: ({ pathname }: RedirectToProps) => void;
};

const initialState: AuthState = {
  user: null,
  loading: true,
  signInWithGoogle: () => {},
  signOut: () => {},
  redirectTo: () => {},
};

const AuthContext = createContext<AuthState | null>(initialState);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<firebaseClient.User | null>(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);

      const userCredential = await firebaseClient
        .auth()
        .signInWithPopup(GOOGLE_AUTH_PROVIDER);

      setUser(userCredential.user);

      await router.push('/chat');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);

      await router.replace('/');

      await firebaseClient.auth().signOut();

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const redirectTo = async ({ pathname }: RedirectToProps) => {
    await router.push(pathname);
  };

  useEffect(() => {
    const authenticationListener = firebaseClient
      .auth()
      .onIdTokenChanged(async firebaseUser => {
        if (!firebaseUser) {
          nookies.set(null, '__ID_TOKEN__', '', { path: '/', sameSite: true });
        } else {
          const idToken = await firebaseUser.getIdToken();

          nookies.set(null, '__ID_TOKEN__', idToken, {
            path: '/',
            sameSite: true,
          });
        }

        setUser(firebaseUser);
        setLoading(false);
      });

    return () => authenticationListener();
  }, []);

  useEffect(() => {
    const INTERVAL_TO_REFRESH_ID_TOKEN = 10 * 60 * 1000;

    const handleRefreshIdToken = setInterval(async () => {
      const firebaseUser = firebaseClient.auth().currentUser;

      if (firebaseUser) await firebaseUser.getIdToken(true);
    }, INTERVAL_TO_REFRESH_ID_TOKEN);

    return () => clearInterval(handleRefreshIdToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, signInWithGoogle, signOut, redirectTo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
