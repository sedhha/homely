import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { IFirebaseVerification } from '@homely-interfaces/Firebase/Auth';
import { getUser } from '@homely-backend/metadata/claims';
import { errorResponse } from '@homely-backend/responseSynthesizer';

export const withProtect = (handler: NextApiHandler) => {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const { token } = request.body as IFirebaseVerification;
    const user = await getUser(token);
    try {
      request.body.user = { ...user };
      return handler(request, response);
    } catch (e) {
      return response
        .status(500)
        .json(errorResponse({ message: 'Internal Server Error' }));
    }
  };
};
