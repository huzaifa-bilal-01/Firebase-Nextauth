import './globals.css'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import SessionProvider from './SessionProvider'
import Home from './page'
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Firebase-Next-Auth',
  description: 'Authentication using Firebase along with NextAuth',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <Home />
          )}
          
        </SessionProvider>
      </body>
    </html>
  )
}
