import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wedding Essentials - Dubai',
  description: 'Wedding management, bridal assistants, catwalk and confidence training, and every detail in between — for the bride who refuses to leave anything to chance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Caveat:wght@400;500&family=Estonia&family=Montez&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
