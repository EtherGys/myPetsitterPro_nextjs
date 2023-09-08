import './globals.css'
// import '@styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RootStyleRegistry from './emotion';
import {HeaderResponsive} from '@components/layout/NavBar';

const inter = Inter({ subsets: ['latin'] })
const labels = ["Accueil", "Créer un compte", "Trouver un professionnel", "Se connecter", "À propos"]
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
      <body className={inter.className}>
      <RootStyleRegistry>
        <HeaderResponsive links={[{ link:"/", label:`${labels[0]}` },{ link:"/redirect", label:`${labels[1]}` },{ link:"/register", label:`${labels[2]}` },{ link:"/login", label:`${labels[3]}` },{ link:"/about", label:`${labels[4]}` }]}/>
        {children}
        </RootStyleRegistry>
        </body>
    </html>
  )
}
