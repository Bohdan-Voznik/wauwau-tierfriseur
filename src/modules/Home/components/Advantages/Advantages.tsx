import styles from './Advantages.module.scss';

import { Container } from '@/components/Container';

const ADVANTAGES_LIST = [
  'Ihr Hund während der Fahrt Stress hat.',
  'Er sich in einer neuen Umgebung unwohl fühlt.',
  'Ihr Haustier schlechte Erfahrungen mit einem Grooming-Salon gemacht hat.',
  'Angst oder Aggression in fremder Umgebung zeigt.',
  'Sie keine Zeit oder Möglichkeit haben, Ihren Hund in einen Salon zu bringen.',
];

export const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <Container>
        <div className={styles.advantagesContent}>
          <h2 className={styles.advantagesTitle}>
            Mobiler Hundeservice ist ideal für Sie, wenn:
          </h2>
          <ul className={styles.advantagesList}>
            {ADVANTAGES_LIST.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
