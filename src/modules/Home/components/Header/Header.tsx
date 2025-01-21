import { Container } from '@/components/Container';
import styles from './Header.module.scss';

import Image from 'next/image';
import { CustomImage } from '@/components/CustomImage';

export const Header = () => {
  return (
    <header>
      <Container className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <CustomImage
              fill
              alt="Logo"
              width={647}
              height={140}
              src="/images/logo.png"
            />
            <p>Göttingen · Kassel · Fulda · Eisenach</p>
          </div>
          <div className={styles.headerBanner}>
            <CustomImage
              fill
              alt="Banner"
              width={1_410}
              height={1_201}
              src="/images/banner.png"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
