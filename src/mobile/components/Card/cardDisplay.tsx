import React, { useState } from 'react';
import downArrow from '../../../assets/images/down-arrow.svg';
import upArrow from '../../../assets/images/up-arrow.svg';

import styles from './styles.module.css';

type CardBodyProps<T> = {
  list: T[];
  renderItem: (item: T) => React.ReactNode;
  renderItemContent(content: T): React.ReactNode;
  handleSelectRow: (item: T) => void;
};

export function CardDisplay<T>({
  list,
  renderItem,
  renderItemContent,
  handleSelectRow,
}: CardBodyProps<T>) {
  const [pos, setPos] = useState<number | null>(null);

  return (
    <div className={styles.cardDisplayContainer}>
      {list?.map((item, index) => (
        <React.Fragment key={crypto.randomUUID()}>
          <div
            className={styles.cardRow}
            onClick={() => {
              setPos(pos === index ? null : index);
              handleSelectRow(item);
            }}
          >
            {renderItem(item)}
            {index !== pos ? (
              <img src={downArrow} alt="Down Arrow" />
            ) : (
              <img src={upArrow} alt="Up Arrow" />
            )}
          </div>
          {renderItemContent(item)}
        </React.Fragment>
      ))}
    </div>
  );
}
