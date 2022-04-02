import { IRegistrationForm } from '@homely-interfaces/Firebase/Auth';
import { IResponse } from '@homely-interfaces/Response/Response';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { registerFirebaseUser } from 'src/firebase/server/public/register-user';

const countHandler: NextApiHandler = async (
  request: NextApiRequest,
  response: NextApiResponse<IResponse>
) => {
  const payload = request.body as IRegistrationForm;
  const result = await registerFirebaseUser(payload);
  return response.status(result.error ? 400 : 201).json(result);
};

export default countHandler;
