export interface UserState {
  isLoggedIn: boolean;
  authToken?: string;
  email?: string;
}

export interface IUploadUserPayload {
  isLoggedIn?: boolean;
  authToken?: string;
  email?: string;
}
