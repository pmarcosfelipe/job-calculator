export class Calculate {
  project;
  planning;
  jobs;

  constructor(app: any) {
    this.project = app.currentProject;
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
}
