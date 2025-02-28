import { createContext } from 'react';
import { EmployeeType } from '../types/EmployeeType';

export type EmployeeContext = {
  employeeData: EmployeeType[];
  searchTerm: string;
  handleSearchTerm: (text: string) => void;
};

export const EmployeeContext = createContext({} as EmployeeContext);
