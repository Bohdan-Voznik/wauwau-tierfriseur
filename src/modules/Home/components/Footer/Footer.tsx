import styles from './Footer.module.scss';
import { Container } from '@/components/Container';
import Link from 'next/link';

const DATA = [
  {
    title: 'Kontakt & Termin',
    items: [
      {
        text: ' Olena Zhyliaieva',
      },
      {
        text: '01516-2670569',
        href: 'tel:01516-2670569',
        options: { target: '_blank' },
      },
    ],
  },
  {
    title: 'Ressourcen',
    items: [
      {
        text: 'Nutzungsbedingungen',
        href: '/terms-and-conditions',
        options: {},
      },
    ],
  },
  {
    title: 'Unser Instagram',
    items: [
      {
        text: 'wauwau_groominga',
        href: 'https://www.instagram.com/wauwau_grooming',
        options: { target: '_blank', rel: 'noopener noreferrer' },
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <Container className={styles.container}>
        <div className={styles.footerContent}>
          {DATA.map(({ title, items }, index) => (
            <div key={index}>
              <h4 className={styles.footerTitle}>{title}</h4>
              <ul className={styles.footerList}>
                {items.map((item, index) => (
                  <li key={index}>
                    {!item.href ? (
                      item.text
                    ) : (
                      <Link href={item.href} {...item.options}>
                        {item.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
