import { addJobToDatabase } from '@homely-backend/jobs/add-job';
import { IAddJob } from '@homely-interfaces/Firebase/Jobs';
import { IResponse } from '@homely-interfaces/Response/Response';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const countHandler: NextApiHandler = async (
  request: NextApiRequest,
  response: NextApiResponse<IResponse>
) => {
  const payload = request.body as IAddJob;
  const result = await addJobToDatabase(payload);
  return response.status(result.error ? 400 : 201).json(result);
};

export default countHandler;
