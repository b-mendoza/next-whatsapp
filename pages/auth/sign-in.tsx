import { useAuth } from 'hooks/useAuth';

function SignIn() {
  const { signInWithGoogle } = useAuth();

  return (
    <>
      <button type="button" onClick={signInWithGoogle}>
        Sign In
      </button>
    </>
  );
}

export default SignIn;
