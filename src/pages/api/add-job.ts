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

/* Fetch Example:
    fetch('api/add-job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "jobTitle":"Walmart Executive",
          "description":"Manage and monitor day to day activies in Walmart",
          "deadline": 1648938875946,
          "workHours":8,
          "maxCapacity":5,
          "applied": 0,
          "location": "New Delhi, India"
      });
    })
*/

export default countHandler;
