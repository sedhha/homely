export interface IAddJob {
  jobTitle: string;
  description: string;
  deadline: number;
  workHours: number;
  maxCapacity: number;
  applied: number;
  location: string;
}
