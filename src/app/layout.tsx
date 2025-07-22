import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/context/LanguageContext' // Importa el provider

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bautista Heyde',
  description: 'Developer, Engineer, Explorer of scalable technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
