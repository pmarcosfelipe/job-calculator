import type { ProjectType } from '../types/project.types';
import { Status, type DataType } from '../types/store.types';

export class Calculate {
  project;
  projects;
  planning;

  constructor(app: DataType) {
    this.project = app.currentProject;
    this.planning = app.planning;
    this.projects = app.projects;
  }

  get valueHour() {
    const weeksPerYear = 52;
    const weeksPerMonth = (weeksPerYear - this.planning.vacationWeeks) / 12;

    const weekTotalHour = this.planning.workHoursPerDay * this.planning.workDaysPerWeek;

    const monthlyTotalHours = weekTotalHour * weeksPerMonth;

    return this.planning.monthlyIncome / monthlyTotalHours;
  }

  get formattedValueHour() {
    return Number(this.valueHour).toLocaleString('en-GB', { style: 'currency', currency: 'EUR' });
  }

  get projectValue(): number {
    return this.valueHour * this.project.totalHours;
  }

  get formattedProjectValue() {
    return Number(this.projectValue).toLocaleString('en-GB', { style: 'currency', currency: 'EUR' });
  }

  get projectsTotalHours() {
    return this.projects.reduce((acc: number, project: ProjectType) => {
      return this.project.status === Status.ONGOING ? acc + project.dailyHours : acc;
    }, 0);
  }

  get freeHours() {
    return this.planning.workHoursPerDay - this.project.totalHours;
  }

  get projectStatuses() {
    return {
      total: this.projects.length,
      progress: this.projects.filter((project: ProjectType) => project.status === Status.ONGOING).length,
      done: this.projects.filter((project: ProjectType) => project.status === Status.DONE).length,
    };
  }
}
