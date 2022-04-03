import Server from '@fb-server';
import { IResponse } from '@homely-interfaces/Response/Response';
import {
  errorResponse,
  genericResponse,
} from '@homely-backend/responseSynthesizer';
import { FirebaseError } from 'firebase/app';
import { IHomeLessUser } from '@homely-interfaces/Firebase/HomelessUser';

export const updateUserInDatabase = async (
  homelessUser: IHomeLessUser
): Promise<IResponse> => {
  const { db, storagePaths } = Server;
  try {
    await db
      .collection(storagePaths.USERS)
      .doc(homelessUser.uid)
      .set(
        {
          name: homelessUser.name ?? 'Unknown',
          phoneNumber: {
            countryCode: homelessUser.phoneNumber.countryCode ?? '+1',
            number: homelessUser.phoneNumber.number ?? 'Unknown Number',
          },
          email: homelessUser.email,
          uid: homelessUser.uid,
        } as IHomeLessUser,
        { merge: true }
      );
    return genericResponse({ message: 'Added To Database Successfully' });
  } catch (er) {
    const error = er as FirebaseError;
    return errorResponse({
      message: error.message,
      payload: { errorCode: error.code },
    });
  }
};
