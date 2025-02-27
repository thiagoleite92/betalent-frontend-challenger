import { useEffect, useState } from 'react';
import { EmployeeContext } from './employeeProvider';
import { api } from '../lib/axios';
import { EmployeeType } from '../types/EmployeeType';

type EmployeeProviderProps = {
  children: React.ReactNode;
};

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [employeeData, setEmployeeData] = useState<EmployeeType[]>([]);

  const fetchEmployeeData = async () => {
    const { data } = await api.get<EmployeeType[]>('/employees');

    setEmployeeData(data);
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const value = {
    employeeData,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
