import styles from './styles.module.css';

type CardHeaderProps<T> = {
  titles: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function CardTitle<T>({ titles, renderItem }: CardHeaderProps<T>) {
  return (
    <div className={styles.cardTitleContainer}>
      <div className={styles.cardTitle}>
        {titles.map((head) => renderItem(head))}
      </div>
      <div className={styles.dot} />
    </div>
  );
}
