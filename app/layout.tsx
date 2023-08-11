import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Alan's website",
  description: "Alan's website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
