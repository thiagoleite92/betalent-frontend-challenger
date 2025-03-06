import { createContext } from 'react';
import { EmployeeType } from '../types/EmployeeType';

export type EmployeeContext = {
  employeeData: EmployeeType[];
  searchTerm: string;
  employeeQuantity: number;
  handleSearchTerm: (text: string) => void;
  isLoading: boolean;
};

export const EmployeeContext = createContext({} as EmployeeContext);
