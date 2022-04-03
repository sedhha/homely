import Server from '@fb-server';
import { IAddJob } from '@homely-interfaces/Firebase/Jobs';

export const getJobs = async () => {
  const { db, storagePaths } = Server;

  const documents = await db.collection(storagePaths.JOBS).get();

  if (documents.empty) {
    return [];
  }
  return documents.docs.map((doc) => doc.data() as IAddJob);
};
