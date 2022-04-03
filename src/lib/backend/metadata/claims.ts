import Server from '@fb-server';
import {
  IFirebaseClaims,
  IFirebaseTokenDetails,
} from '@homely-interfaces/Firebase/Auth';
import { FirebaseError } from 'firebase-admin';

export const getUser = async (
  token: string
): Promise<IFirebaseTokenDetails> => {
  return Server.auth
    .verifyIdToken(token)
    .then((claims) => {
      return Server.auth.getUser(claims.uid).then((userRecord) => {
        return {
          uid: claims.uid ?? '',
          email: claims.email ?? '',
          userType: userRecord.customClaims?.['userType'] ?? 'Undefined',
          validUser: true,
        };
      });
    })
    .catch((error: FirebaseError) => ({
      validUser: false,
      errorMessage: error.message,
      errorCode: error.code,
    }));
};
