import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = { title: 'KC Fabrics', description: 'KC Fabrics — premium home furnishing fabrics' }

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
