import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata(): Metadata {
  return {
    title: 'Sidat Sangkuriang - Budidaya Sidat Modern',
    description: 'Platform terdepan untuk budidaya sidat modern dengan teknologi IoT dan pelatihan komprehensif',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}