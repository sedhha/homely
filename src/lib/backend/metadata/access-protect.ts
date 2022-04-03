import {
  firebaseUsers,
  FirebaseUserType,
} from '@homely-interfaces/Firebase/Auth';

const adminProtectedOps = (role: FirebaseUserType) =>
  role === firebaseUsers.admin;

const userProtectedOps = (role: FirebaseUserType) =>
  role === firebaseUsers.jobSeeker || role === firebaseUsers.admin;

const employerProtectedOps = (role: FirebaseUserType) =>
  role === firebaseUsers.employer || role === firebaseUsers.admin;

export const rolesProtect = {
  adminProtectedOps,
  userProtectedOps,
  employerProtectedOps,
};
