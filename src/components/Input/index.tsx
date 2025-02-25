import { InputHTMLAttributes } from 'react';
import searchIcon from '../../assets/images/search-icon.svg';

import styles from './styles.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ placeholder }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder={placeholder} />
      <img src={searchIcon} alt="Search Icon" />
    </div>
  );
}
