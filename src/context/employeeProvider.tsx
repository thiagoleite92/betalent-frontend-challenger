import { createContext } from 'react';
import { EmployeeType } from '../types/EmployeeType';

export type EmployeeContext = {
  employeeData: EmployeeType[];
};

export const EmployeeContext = createContext({} as EmployeeContext);
