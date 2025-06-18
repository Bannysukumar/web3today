import type { Metadata } from 'next'
import { inter, spaceGrotesk } from '@/styles/typography'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'QuickContracts.dev',
  description: 'Smart contract development agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black text-white antialiased">
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
} 