import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'
import { Poppins } from "next/font/google"
import { Pacifico } from "next/font/google"

export const metadata = {
  title: 'A.pets',
  description: 'Venha cadastrar ou adotar um animalzinho!',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200', '400', '500','700', '900'],
})

export const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
