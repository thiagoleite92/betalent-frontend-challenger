import { useContext } from 'react';
import { EmployeeContext } from '../context/employeeProvider';

export function useEmployee() {
  const { employeeData, isLoading } = useContext(EmployeeContext);

  return { employeeData, isLoading };
}
