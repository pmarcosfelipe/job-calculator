export type ProjectType = {
  id: string;
  name: string;
  dailyHours: number;
  totalHours: number;
  status?: string;
  createdAt: Date;
};
