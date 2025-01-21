import styles from './Gallery.module.scss';

import { Container } from '@/components/Container';
import { CustomImage } from '@/components/CustomImage';

const IMAGES = [
  '/images/photo_1.jpg',
  '/images/photo_2.jpg',
  '/images/photo_3.jpg',
];

export const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <Container>
        <ul>
          {IMAGES.map((image, index) => (
            <li key={index}>
              <CustomImage
                fill
                alt={`Image ${index}`}
                width={417}
                height={799}
                src={image}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
