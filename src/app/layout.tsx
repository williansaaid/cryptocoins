import './globals.css';
import type { Metadata } from 'next';
import LayoutClient from './layoutClient';

export const metadata: Metadata = {
  title: 'CryptoCoins',
  description: 'Your cryptocurrencies info page!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <LayoutClient>
        {children}
      </LayoutClient>
    </>
  )
}
