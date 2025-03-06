import styles from './styles.module.css';

export function NoDataWarning() {
  return (
    <span className={styles.filterWarning}>Nenhum registro encontrado.</span>
  );
}
