import type { DataType } from '../types/store.types';

export const DB = {
  init(initialData: DataType) {
    const data = DB.get();

    if (Object.keys(data).length === 0) {
      return DB.set(initialData);
    }

    return data;
  },
  get() {
    const projectsCalculatorApp = localStorage.getItem('@projectscalculator:app');
    if (projectsCalculatorApp) {
      return JSON.parse(projectsCalculatorApp);
    } else {
      return {};
    }
  },
  set(app = {}) {
    localStorage.setItem('@projectscalculator:app', JSON.stringify(app));

    return DB.get();
  },
};
