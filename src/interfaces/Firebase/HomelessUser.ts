export interface IPhoneNumber {
  countryCode: string;
  number: string;
}

export interface IHomeLessUser {
  name: string;
  email: string;
  uid: string;
  phoneNumber: IPhoneNumber;
}
