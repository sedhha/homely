import Server from '@fb-server';

export const getNonProfitOrgs = async (uid: string) => {
  const { storagePaths, db } = Server;
  const document = await db
    .collection(storagePaths.NON_PROFIT_ENDORSEMENTS)
    .doc(uid)
    .get();

  if (document.exists) {
    return document.data() as string[];
  }
  return [] as string[];
};
