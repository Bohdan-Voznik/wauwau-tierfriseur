import type { Metadata } from 'next';
import { Itim, Inter } from 'next/font/google';
import './globals.css';
import classnames from 'classnames';

const itim = Itim({
  weight: '400',
  variable: '--font-itim',
  subsets: ['latin'],
});

const inter = Inter({
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classnames(itim.variable, inter.variable)}>
        {children}
      </body>
    </html>
  );
}
