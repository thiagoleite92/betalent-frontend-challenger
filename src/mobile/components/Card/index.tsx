import { ReactNode } from 'react';

import styles from './styles.module.css';

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return <section className={styles.cardContainer}>{children}</section>;
}
