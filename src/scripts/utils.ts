import type { DataType } from '../types/store.types';
import { DB } from './db';

const debounce = (fn: Function, ms = 500) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

function autosave(data: DataType) {
  DB.set(data);
}

export const deboucedAutoSave = debounce(autosave);
