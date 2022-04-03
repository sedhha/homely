import { withUserProtect } from '@homely-backend/middleware/withUserProtect';
import { IFirebaseTokenDetails } from '@homely-interfaces/Firebase/Auth';
import type { NextApiHandler } from 'next';

const countHandler: NextApiHandler = async (request, response) => {
  const { user } = request.body as { user: IFirebaseTokenDetails };
  response.json({ user });
};

export default withUserProtect(countHandler);
