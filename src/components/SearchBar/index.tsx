import { useState, useEffect, useContext } from 'react';
import { Input } from '../Input';
import styles from './styles.module.css';
import { EmployeeContext } from '../../context/employeeProvider';

export function SearchBar() {
  const { handleSearchTerm, searchTerm } = useContext(EmployeeContext);
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearchTerm(inputValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue, handleSearchTerm]);

  return (
    <section className={styles.searchContainer}>
      <h1>Funcionários</h1>
      <form className={styles.formContainer}>
        <Input
          placeholder="Pesquisar"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </form>
    </section>
  );
}
