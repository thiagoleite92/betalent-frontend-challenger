import styles from './styles.module.css';
import { ReactNode } from 'react';

type TableProps = {
  children: ReactNode;
};

export function Table({ children }: TableProps) {
  return <table className={styles.tableContainer}>{children}</table>;
}
