import { useContext } from 'react';
import { EmployeeContext } from '../context/employeeProvider';

export function useEmployee() {
  const { employeeData } = useContext(EmployeeContext);

  return employeeData;
}
