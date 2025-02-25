import logoBeTalent from '../../assets/images/logo-betalent.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoBeTalent} alt="BeTalent" />
    </header>
  );
}
