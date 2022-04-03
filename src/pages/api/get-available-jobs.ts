import { getJobs } from '@homely-backend/homeless/getJobs';
import { withUserProtect } from '@homely-backend/middleware/withUserProtect';
import { genericResponse } from '@homely-backend/responseSynthesizer';
import type { NextApiHandler } from 'next';

const countHandler: NextApiHandler = async (request, response) => {
  const jobs = await getJobs();
  response.status(200).json(genericResponse({ payload: jobs }));
};

export default withUserProtect(countHandler);
