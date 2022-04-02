import admin from 'firebase-admin';

const keyString = process.env.FB_ADMIN_PRIVATE_KEY ?? '{"privateKey": ""}';

const { privateKey } = JSON.parse(keyString);

if (privateKey === '') {
  console.log('FIREBASE_PRIVATE_KEY is not set');
  throw new Error('FIREBASE_PRIVATE_KEY is not set');
}

if (admin.apps.length === 0)
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FB_ADMIN_CLIENT_EMAIL,
      privateKey: privateKey,
      projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    }),
    databaseURL: process.env.FB_ADMIN_RTDB_URL,
  });

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();
const rdb = admin.database();

const Server = { auth, db, storage, rdb };
export default Server;
