import Link from 'next/link'
import './globals.css'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: {
    template: '%s - Campus bookings',
    default: 'Campus Bookings'
    },
  }
export default function RootLayout({ children }: LayoutProps<'/'>){
  return ( 
    <html lang="en">
      <body>
        <nav aria-label="Main">
          <Link href="/">Home</Link>
        <Link href="/resources">Resources</Link>
        </nav>
        <main> {children}</main>
      </body>
    </html>
  )
}