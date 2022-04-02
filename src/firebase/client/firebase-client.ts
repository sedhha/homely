// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  browserLocalPersistence,
} from 'firebase/auth';
import {
  FirebaseUserType,
  IRegistrationForm,
} from '@homely-interfaces/Firebase/Auth';
import { IResponse } from '@homely-interfaces/Response/Response';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENT_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const storage = getStorage(app);
let analytics: Analytics;

const initAnalytics = async () => {
  if (await isSupported()) {
    analytics = getAnalytics(app);
  }
};
initAnalytics();
auth.setPersistence(browserLocalPersistence);
auth.useDeviceLanguage();

//Initialize Utility
interface IFirebaseUserOp {
  user?: UserCredential;
  error: boolean;
  code: string;
  message: string;
  metadata: any;
}

export const signInUser = async (
  email: string,
  password: string
): Promise<IFirebaseUserOp> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      // Signed in
      return user.user.getIdTokenResult().then((result) => {
        return {
          user,
          code: '',
          message: '',
          metadata: result.claims,
          error: false,
        };
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        code: errorCode,
        message: errorMessage,
        error: true,
        metadata: {},
      };
    });
};

export const registerFirebaseUser = async (
  email: string,
  password: string,
  userType: FirebaseUserType
): Promise<IResponse> => {
  return fetch('/api/register-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      userType,
    } as IRegistrationForm),
  }).then((response) => response.json().then((data) => data as IResponse));
};
export default { app, storage, auth, registerFirebaseUser, signInUser };
export { analytics };
