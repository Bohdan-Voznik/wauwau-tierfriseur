import styles from './Gallery.module.scss';

import firstImg from '../../img/photo_1.jpg';
import secondImg from '../../img/photo_2.jpg';
import thirdImg from '../../img/photo_3.jpg';
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
            <li>
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
