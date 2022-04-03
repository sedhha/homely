import { IAddJob } from '@homely-interfaces/Firebase/Jobs';
import Server from '@fb-server';
import { IResponse } from '@homely-interfaces/Response/Response';
import {
  errorResponse,
  genericResponse,
} from '@homely-backend/responseSynthesizer';
import { FirebaseError } from 'firebase/app';
import { IHomeLessUser } from '@homely-interfaces/Firebase/HomelessUser';
import { IUserToken } from '@homely-interfaces/Firebase/Auth';

export const updateUserInDatabase = async (
  homelessUser: IHomeLessUser&IUserToken
): Promise<IResponse> => {
  const { db, storagePaths } = Server;
  if (homelessUser.name !== undefined && homelessUser.name.length < 1) {
    return errorResponse({
      message: 'Invalid Name',
    });
  }
  else if(homelessUser.)
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
