export type JobType = {
  id: string;
  name: string;
  dailyHours: number;
  totalHours: number;
  status?: string;
  createdAt: Date;
};
