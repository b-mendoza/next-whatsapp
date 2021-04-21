import * as firebaseAdmin from 'firebase-admin';

const projectId = process.env.FIREBASE_PROJECT_ID;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

if (!privateKey || !clientEmail || !projectId) {
  console.error('Failed to load Firebase credentials');
}

type VerifyIdTokenProps = {
  idToken: string;
};

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId,
      privateKey,
      clientEmail,
    }),
  });
}

export const verifyIdToken = ({ idToken }: VerifyIdTokenProps) =>
  firebaseAdmin.auth().verifyIdToken(idToken);

export default firebaseAdmin;
