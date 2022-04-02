import {
  IRegistrationForm,
  firebaseUserTypes,
} from '@homely-interfaces/Firebase/Auth';
import { IResponse } from '@homely-interfaces/Response/Response';
import {
  errorResponse,
  genericResponse,
} from 'src/lib/backend/responseSynthesizer';
import Server from '../firebase-server';
import { CreateRequest } from 'firebase-admin/lib/auth/auth-config';
import { FirebaseError } from 'firebase-admin';

export const registerFirebaseUser = async (
  payload: IRegistrationForm
): Promise<IResponse> => {
  const { email, password, userType } = payload;
  if (!firebaseUserTypes.includes(userType))
    return errorResponse({
      message: 'Invalid User Type, Must be: "Job Seeker" or "Employer"',
    });

  return Server.auth
    .createUser({
      email,
      password,
    } as CreateRequest)
    .then((user) => {
      Server.auth.setCustomUserClaims(user.uid, { userType });
      return genericResponse({
        message: 'User Created Successfully',
        payload: { user },
      });
    })
    .catch((error: FirebaseError) => {
      const code = error.message;
      const message = error.message;
      return errorResponse({ message, payload: { error } });
      // ..
    });
};
