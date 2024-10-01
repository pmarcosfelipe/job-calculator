import type { JobType } from './job.types';
import type { UserModel } from './user.types';

export enum Status {
  DONE = 'done',
  ONGOING = 'on going',
}

export type DataType = {
  page: string;
  user: UserModel;
  planning: any;
  jobs: any;
  currentJob: JobType;
};
