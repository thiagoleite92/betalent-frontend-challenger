import downArrow from '../../../assets/images/down-arrow.svg';

import styles from './styles.module.css';

type CardBodyProps<T> = {
  list: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function CardDisplay<T>({ list, renderItem }: CardBodyProps<T>) {
  return (
    <div className={styles.cardDisplayContainer}>
      {list?.map((item) => (
        <>
          <div className={styles.cardRow}>
            {renderItem(item)} <img src={downArrow} alt="Down Arrow" />
          </div>
        </>
      ))}
    </div>
  );
}
