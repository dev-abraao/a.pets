import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'
import { Poppins } from "next/font/google"

export const metadata = {
  title: 'A.pets',
  description: 'Venha cadastrar ou adotar um animalzinho!',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
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
