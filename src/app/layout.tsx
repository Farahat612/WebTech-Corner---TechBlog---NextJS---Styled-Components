import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { keywords } from '@/constants/keywords'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebTech Corner',
  description: `
    Your first blog to visit to read about web technologies and software development. 
    Learn about the latest trends in web development, and get tips on how to improve your coding skills.
    Also, get to know about the latest tools and technologies that are being used in the industry.
  `,
  keywords,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
