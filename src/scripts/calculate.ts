import type { JobType } from '../types/job.types';
import { Status, type DataType } from '../types/store.types';

export class Calculate {
  job;
  jobs;
  planning;

  constructor(app: DataType) {
    this.job = app.currentJob;
    this.planning = app.planning;
    this.jobs = app.jobs;
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

  get jobValue(): number {
    return this.valueHour * this.job.totalHours;
  }

  get formattedJobValue() {
    return Number(this.jobValue).toLocaleString('en-GB', { style: 'currency', currency: 'EUR' });
  }

  get jobsTotalHours() {
    return this.jobs.reduce((acc: number, job: JobType) => {
      return this.job.status === Status.ONGOING ? acc + job.dailyHours : acc;
    }, 0);
  }

  get freeHours() {
    return this.planning.workHoursPerDay - this.job.totalHours;
  }

  get jobStatuses() {
    return {
      total: this.jobs.length,
      progress: this.jobs.filter((job: JobType) => job.status === Status.ONGOING).length,
      done: this.jobs.filter((job: JobType) => job.status === Status.DONE).length,
    };
  }
}
