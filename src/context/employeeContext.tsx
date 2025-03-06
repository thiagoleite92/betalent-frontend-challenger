import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { EmployeeContext } from './employeeProvider';
import { EmployeeType } from '../types/EmployeeType';
import { normalizeText } from '../utils/normalize-text';

type EmployeeProviderProps = {
  children: React.ReactNode;
};

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [employeeData, setEmployeeData] = useState<EmployeeType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchEmployeeData = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get<EmployeeType[]>('/employees');
      setEmployeeData(data);
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchTerm = (text: string) => {
    setSearchTerm(text);
  };

  const filteredData = employeeData.filter((employee) => {
    const normalizedSearch = normalizeText(searchTerm);

    return (
      normalizeText(employee?.name).includes(normalizedSearch) ||
      normalizeText(employee?.job).includes(normalizedSearch) ||
      employee?.phone.includes(searchTerm)
    );
  });

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const value = {
    employeeData: filteredData,
    searchTerm,
    handleSearchTerm,
    employeeQuantity: filteredData?.length,
    isLoading,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
