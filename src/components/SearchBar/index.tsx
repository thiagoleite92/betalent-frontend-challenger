import { Input } from '../Input';
import styles from './styles.module.css';

export function SearchBar() {
  return (
    <section className={styles.searchContainer}>
      <h1>Funcionários</h1>
      <form className={styles.formContainer}>
        <Input placeholder="Pesquisar" />
      </form>
    </section>
  );
}
