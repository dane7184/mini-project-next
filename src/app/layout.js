import NavbarComponent from '@/components/NavbarComponent'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  titel: 'ISTAD',
  description : 'School of Information System,'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <NavbarComponent/>
        
        {children}
        <Footer/>
        </body>
    </html>
  )
}
