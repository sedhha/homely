import { getNonProfitOrgs } from '@homely-backend/admin/assocOrgs';
import { withUserProtect } from '@homely-backend/middleware/withUserProtect';
import { genericResponse } from '@homely-backend/responseSynthesizer';
import { IFirebaseTokenDetails } from '@homely-interfaces/Firebase/Auth';
import type { NextApiHandler } from 'next';

const countHandler: NextApiHandler = async (request, response) => {
  const { user } = request.body as { user: IFirebaseTokenDetails };
  if (!user.uid)
    return response.status(200).json(genericResponse({ payload: [] }));
  const data = await getNonProfitOrgs(user.uid);
  return response.status(200).json(genericResponse({ payload: data }));
};

export default withUserProtect(countHandler);
