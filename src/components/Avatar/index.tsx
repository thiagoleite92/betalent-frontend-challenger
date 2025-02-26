import { ImgHTMLAttributes } from 'react';

import styles from './styles.module.css';

type AvatarProfileProps = ImgHTMLAttributes<HTMLImageElement>;

export function AvatarProfile(props: AvatarProfileProps) {
  return <img {...props} className={styles.avatarProfile} />;
}
