import { writable } from 'svelte/store';
import { Job } from './scripts/jobs';
import type { DataType } from './types/store.types';

const createApp = (data: DataType) => {
  const app = writable(data);

  return app;
};

export const app = createApp({
  user: {
    name: 'Marcos Vieira',
    avatar: 'https://github.com/pmarcosfelipe.png',
  },
  planning: {
    monthlyIncome: 10000,
    workHoursPerDay: 4,
    workDaysPerWeek: 2,
    vacationWeeks: 30,
  },
  jobs: [
    {
      id: 1,
      name: 'Job 1',
      dailyHours: 1,
      totalHours: 4,
      status: 'Encerrado',
      remaining: 1,
      budget: 100,
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Job 2',
      dailyHours: 1,
      totalHours: 4,
      status: 'Em andamento',
      remaining: 1,
      budget: 100,
      createdAt: new Date(),
    },
  ],
  page: 'profile',
  currentJob: new Job(),
});
