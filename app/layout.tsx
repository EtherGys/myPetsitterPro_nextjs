'use client'
import './globals.css'
// import '@styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RootStyleRegistry from './emotion';
import {HeaderResponsive} from '@components/layout/NavBar';
import Provider from 'context/Provider';
import { SessionProvider, useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: `PETSITTERPro`,
  description: 'Trouver un Petsitter professionnel dans votre région !',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
    <html lang="en">
        <Provider>
      <body className={inter.className}>

      <RootStyleRegistry>
        <HeaderResponsive />
        {children}
        </RootStyleRegistry>
        </body>
        </Provider>
    </html>
  )
}
