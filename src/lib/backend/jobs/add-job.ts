import { IAddJob } from '@homely-interfaces/Firebase/Jobs';
import Server from '@fb-server';
import { IResponse } from '@homely-interfaces/Response/Response';
import {
  errorResponse,
  genericResponse,
} from '@homely-backend/responseSynthesizer';
import { FirebaseError } from 'firebase/app';

export const addJobToDatabase = async (
  jobDetails: IAddJob
): Promise<IResponse> => {
  const { db, storagePaths } = Server;
  if (jobDetails.applied < 0)
    return errorResponse({
      message: 'Invalid Applied Value, Must be a positive number',
    });
  else if (jobDetails.deadline < new Date().getTime()) {
    return errorResponse({
      message: 'Invalid Deadline, Must be a future date',
    });
  } else if (jobDetails.description === undefined) {
    return errorResponse({
      message: 'Invalid Description, Must be a string',
    });
  } else if (jobDetails.jobTitle === undefined) {
    return errorResponse({
      message: 'Invalid Job Title, Must be a string',
    });
  } else if (jobDetails.location === undefined) {
    return errorResponse({
      message: 'Invalid Location, Must be a string',
    });
  } else if (jobDetails.maxCapacity < 1) {
    return errorResponse({
      message: 'Invalid Max Capacity, Must be a positive number',
    });
  } else if (jobDetails.workHours < 1) {
    return errorResponse({
      message: 'Invalid Work Hours, Must be a positive number',
    });
  }
  console.log({
    jobTitle: jobDetails.jobTitle,
    description: jobDetails.description,
    deadline: jobDetails.deadline,
    workHours: jobDetails.workHours,
    maxCapacity: jobDetails.maxCapacity,
    applied: jobDetails.applied,
    location: jobDetails.location,
  });
  try {
    await db.collection(storagePaths.JOBS).add({
      jobTitle: jobDetails.jobTitle,
      description: jobDetails.description,
      deadline: jobDetails.deadline,
      workHours: jobDetails.workHours,
      maxCapacity: jobDetails.maxCapacity,
      applied: jobDetails.applied,
      location: jobDetails.location,
    });
    return genericResponse({ message: 'Added To Database Successfully' });
  } catch (er) {
    const error = er as FirebaseError;
    return errorResponse({
      message: error.message,
      payload: { errorCode: error.code },
    });
  }
};
