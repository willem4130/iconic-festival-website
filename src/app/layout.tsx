import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TRPCReactProvider } from '@/trpc/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header, Footer } from '@/components/layout'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Iconic Festival | Een groots muzikaal eerbetoon',
    template: '%s | Iconic Festival',
  },
  description: 'Iconic Festival viert jaarlijks de grootste muziekiconen met een line-up volledig gewijd aan legendarische hits en tijdloze artiesten. De beste tribute acts in Goffertpark, Nijmegen.',
  keywords: ['iconic festival', 'music festival', 'nijmegen', 'goffertpark', 'tribute acts', 'music icons', 'festival nederland', 'legendary hits'],
  authors: [{ name: 'Iconic Festival' }],
  creator: 'Iconic Festival',
  publisher: 'Iconic Festival',
  metadataBase: new URL('https://www.iconicfestival.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Iconic Festival | Een groots muzikaal eerbetoon',
    description: 'Iconic Festival viert jaarlijks de grootste muziekiconen met een line-up volledig gewijd aan legendarische hits en tijdloze artiesten.',
    url: 'https://www.iconicfestival.nl',
    siteName: 'Iconic Festival',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iconic Festival | Een groots muzikaal eerbetoon',
    description: 'Iconic Festival viert jaarlijks de grootste muziekiconen met een line-up volledig gewijd aan legendarische hits en tijdloze artiesten.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <TRPCReactProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </TRPCReactProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
