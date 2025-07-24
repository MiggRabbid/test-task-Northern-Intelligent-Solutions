import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';

import './globals.css';

import { StoreProvider } from '@/providers';
import { AppHeader } from '@/shared/components';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['cyrillic', 'latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Тестовое задание',
  description: 'ТЗ для компании Северные интеллектуальные решения',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
        <StoreProvider>
          <AppHeader />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
