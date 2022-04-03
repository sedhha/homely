import { updateUserInDatabase } from '@homely-backend/homeless/updateHomeless';
import { withUserProtect } from '@homely-backend/middleware/withUserProtect';
import {
  errorResponse,
  genericResponse,
} from '@homely-backend/responseSynthesizer';
import { IUpdateHomelessUser } from '@homely-interfaces/Firebase/HomelessUser';
import type { NextApiHandler } from 'next';

const countHandler: NextApiHandler = async (request, response) => {
  const { homelessUser, user } = request.body as IUpdateHomelessUser;
  homelessUser.uid = user.uid ?? 'Blunder Error Uid';
  homelessUser.email = user.email ?? 'Blunder Error Email';
  const result = await updateUserInDatabase(homelessUser);
  response
    .status(result.error ? 400 : 201)
    .json(
      result.error
        ? errorResponse({ message: result.message })
        : genericResponse({ message: result.message })
    );
};

export default withUserProtect(countHandler);
