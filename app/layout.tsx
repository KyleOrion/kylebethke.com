import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Header from './components/Header'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kyle Bethke',
  description: 'Personal website of Kyle Bethke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}