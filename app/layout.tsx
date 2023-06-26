import { relative } from 'path'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata = {
  title: 'Car',
  description: 'Cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Navbar/>

        {children}
        <Footer/>

      </body>
    </html>
  )
}
