import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body
        className={`bg-white w-full min-h-screen flex flex-col items-center ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}
