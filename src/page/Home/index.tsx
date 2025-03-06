import { useMemo, useState } from 'react';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useEmployee } from '../../hooks/useEmployee';
import { Loading } from '../../components/Loading';
import { NoDataWarning } from '../../components/NoDataWarning';
import { EmployeeTable } from '../components/EmployeeTable';
import { EmployeeCardDisplay } from '../components/EmployeeCardDisplay';

import styles from './styles.module.css';
export function Home() {
  const { width } = useWindowSize();
  const isDesktop = useMemo(() => width && width >= 981, [width]);
  const { employeeData, isLoading } = useEmployee();

  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  if (isLoading) {
    return (
      <main className={styles.main}>
        <Header />
        <SearchBar />
        <Loading />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Header />
      <SearchBar />

      {employeeData.length === 0 ? (
        <NoDataWarning />
      ) : isDesktop ? (
        <EmployeeTable data={employeeData} />
      ) : (
        <EmployeeCardDisplay
          data={employeeData}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      )}
    </main>
  );
}
