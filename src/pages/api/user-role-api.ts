import {
  errorResponse,
  genericResponse,
} from '@homely-backend/responseSynthesizer';
import type { NextApiHandler } from 'next';
import Server from '@fb-server';
import { FirebaseError } from 'firebase-admin';

const countHandler: NextApiHandler = async (request, response) => {
  if (process.env.NODE_ENV !== 'development')
    return response
      .status(401)
      .json(errorResponse({ message: 'Unauthorized' }));

  const { uid } = request.body as { uid: string };
  return Server.auth
    .setCustomUserClaims(uid, { userType: 'Admin' })
    .then(() =>
      response.status(201).json(
        genericResponse({
          message: 'User Role Successfully updated to Admin',
        })
      )
    )
    .catch((error: FirebaseError) =>
      response.status(400).json(
        errorResponse({
          message: error.message,
          payload: { code: error.code },
        })
      )
    );
};

export default countHandler;
