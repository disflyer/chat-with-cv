import './globals.css'
import type { Metadata } from 'next'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({ display: 'swap', weight: "400", subsets: ['latin'] })

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
      <body className={`${silkscreen.className}`}>
        <main>
          {children}
        <footer className="text-slate-400 absolute bottom-5 text-center w-full">© Alan&apos;s website</footer>
        </main>
      </body>
    </html>
  )
}
