import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import {
  FirebaseUserType,
  IFirebaseVerification,
} from '@homely-interfaces/Firebase/Auth';
import { getUser } from '@homely-backend/metadata/claims';
import { errorResponse } from '@homely-backend/responseSynthesizer';
import { rolesProtect } from '@homely-backend/metadata/access-protect';

export const withEmployerProtect = (handler: NextApiHandler) => {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const { token } = request.body as IFirebaseVerification;
    const user = await getUser(token);
    try {
      if (
        !rolesProtect.employerProtectedOps(user.userType as FirebaseUserType) ||
        !user.validUser
      )
        return response.status(401).json(
          errorResponse({
            message: `You are not authorized to access this resource. as ${user.errorCode}:${user.errorMessage}`,
          })
        );

      request.body.user = { ...user };
      return handler(request, response);
    } catch (error) {
      return response
        .status(500)
        .json(errorResponse({ message: 'Internal Server Error' }));
    }
  };
};
