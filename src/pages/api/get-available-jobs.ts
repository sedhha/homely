import { getJobs } from '@homely-backend/homeless/getJobs';
import { withProtect } from '@homely-backend/middleware/withProtect';
import { genericResponse } from '@homely-backend/responseSynthesizer';
import type { NextApiHandler } from 'next';

const countHandler: NextApiHandler = async (request, response) => {
  const jobs = await getJobs();
  response.status(200).json(genericResponse({ payload: jobs }));
};

export default withProtect(countHandler);
