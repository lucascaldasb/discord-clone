import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Chat Application',
  description: 'Talk in real time with your team!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        font.className,
        "bg-white dark:bg-[#313338]"
      )}>
        <ThemeProvider 
          attribute='class' 
          defaultTheme='dark' 
          enableSystem={false}
          storageKey='discord-theme'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
