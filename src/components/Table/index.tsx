import styles from './styles.module.css';
import { ReactNode } from 'react';

type TableProps = {
  children: ReactNode;
};

export function Table({ children }: TableProps) {
  return (
    <div className={styles.tableWrapper}>
      <style>
        {`
          div::-webkit-scrollbar {
            width: 4px;
          }
          div::-webkit-scrollbar-thumb {
            background: var(--Gray20);
          }
          div::-webkit-scrollbar-track {
            background: var(--Black);
            border-radius: 4px;
          }
        `}
      </style>
      <table className={styles.tableContainer}>{children}</table>
    </div>
  );
}
