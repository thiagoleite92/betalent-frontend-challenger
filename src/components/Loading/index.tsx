import styles from './styles.module.css';

export function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.loadingBox}>
        <div className={styles.spinner} />
        <p className={styles.loadingText}>Carregando...</p>
      </div>
    </div>
  );
}
