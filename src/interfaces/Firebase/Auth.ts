export type FirebaseUserType = 'Job Seeker' | 'Employer';
export const firebaseUserTypes = ['Job Seeker', 'Employer'];
export const firebaseUsers = {
  jobSeeker: 'Job Seeker',
  employer: 'Employer',
};

export interface IRegistrationForm {
  email: string;
  password: string;
  userType: FirebaseUserType;
}

export interface IFirebaseClaims {
  userType: FirebaseUserType;
}
