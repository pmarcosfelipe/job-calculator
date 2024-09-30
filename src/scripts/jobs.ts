import { dayjs } from './dayjs';

export class Job {
  id: string;
  name: string;
  dailyHours: number;
  totalHours: number;
  createdAt: Date;

  constructor(name?: string, dailyHours?: number, totalHours?: number) {
    this.id = crypto.randomUUID();
    this.name = name || 'New Project';
    this.dailyHours = dailyHours || 1;
    this.totalHours = totalHours || 2;
    this.createdAt = new Date();
  }

  get remainingDays(): number {
    const totalDays = Math.ceil(this.totalHours / this.dailyHours);
    const passedDays = dayjs().diff(this.createdAt, 'day');

    return totalDays - passedDays;
  }

  get status(): string {
    return this.remainingDays < 0 ? 'done' : 'on going';
  }

  get deadline() {
    return dayjs().add(this.remainingDays, 'day').diff(this.createdAt);
  }
}
