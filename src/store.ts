import { writable } from 'svelte/store';
import { Project } from './scripts/projects';
import type { DataType } from './types/store.types';
import { DB } from './scripts/db';

const createApp = (initialData: DataType) => {
  const data = DB.init(initialData);
  const app = writable(data);

  if (data.projects.length > 0) {
    data.projects = data.projects.map((project: any) => new Project(project.name, project.dailyHours, project.totalHours));
  }

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
  projects: [new Project('Finish Project', 2, 5), new Project('Start New Project', 1, 5)],
  page: 'home',
  currentProject: new Project(),
});
