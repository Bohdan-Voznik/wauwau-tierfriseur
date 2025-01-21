import styles from './Pricing.module.scss';

import { Container } from '@/components/Container';
import { CustomImage } from '@/components/CustomImage';

const PRICING_LIST = [
  {
    price: 'ab 55 €',
    title: 'Komplette Pflege für Hunde*',
    description:
      'Waschen, Trocknen, Kämmen, effilieren, Intimpflege, Augen- , Pfoten- &Krallenpflege.',
  },
  {
    price: 'ab 65 €',
    title: 'Premium Komplette Pflege für Hunde*',
    description:
      'Das Komplettpaket der professionellen Hunde-Stylings mit Baden, Trocknen, Bürsten bzw. Schneiden, Scheren, Krallen-, Augen-, Pfoten-, Ohren-,Intimpflege.',
  },
  {
    price: 'ab 50 €',
    title: 'Komplette Pflege für Katzen*',
    description:
      'Krallen kürzen, Pfoten schneiden, Krallen-, Augen-, Pfoten-, Ohren-, Intimpflege.',
  },

  {
    price: '17 € pro Stunde',
    title: 'Trimmen von Hunden*',
    description:
      'Mechanisches Entfernen abgestorbener Haare bei rauhaarigen Hunderassen.',
  },
];

export const Pricing = () => {
  return (
    <section>
      <Container>
        <div className={styles.pricingContent}>
          <div>
            <h2 className={styles.pricingTitle}>Leistungen und Preise</h2>
            <ul className={styles.pricingList}>
              {PRICING_LIST.map((item, index) => (
                <li key={index} className={styles.pricingItem}>
                  <div>
                    <h4 className={styles.pricingItemTitle}>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <p className={styles.pricingItemPrice}>{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.pricingRight}>
            <CustomImage
              fill
              alt="Pricing"
              width={491}
              height={492}
              src="/images/pricing.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
