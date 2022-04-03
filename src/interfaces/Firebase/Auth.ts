export type FirebaseUserType = 'Job Seeker' | 'Employer' | 'Admin';
export const firebaseUserTypes = ['Job Seeker', 'Employer', 'Admin'];
export const firebaseUsers = {
  jobSeeker: 'Job Seeker',
  employer: 'Employer',
  admin: 'Admin',
};

export interface IRegistrationForm {
  email: string;
  password: string;
  userType: FirebaseUserType;
}

export interface IFirebaseClaims {
  userType: FirebaseUserType;
}

export interface IFirebaseVerification {
  token: string;
}

export interface IFirebaseTokenDetails {
  email?: string;
  uid?: string;
  userType?: FirebaseUserType;
  validUser: boolean;
  errorCode?: string;
  errorMessage?: string;
}
