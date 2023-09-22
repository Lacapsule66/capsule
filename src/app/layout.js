import Header2 from '@/components/Header2'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Time from '@/components/Time'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Agence La Capsule - Faites un bond en avant dans le digital",
  description: "L'agence de web La Capsule, vous accompagne dans votre stratégie de communication et de marketing digital. Créer des site web de qualité des publicités efficaces.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates :{
    canonical: "https://www.agence-la-capsule.fr/"
  },
  generator : "NextJS",
  applicationName : "Agence La Capsule",
  referrer: 'origin-when-cross-origin',
  authors : [{name: "Romain Marty"}],
  creator : "Romain Marty",
  openGraph: {
    title: 'Agence La Capsule - Faites un bond en avant dans le digital',
    description: 'L\'agence de web La Capsule, vous accompagne dans votre stratégie de communication et de marketing digital. Créer des site web de qualité des publicités efficaces.',
    url: 'https://www.agence-la-capsule.fr/',
    siteName: 'Agence La Capsule',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
   
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-07152E5211" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-07152E5211');
        `}
      </Script>
   


      <body className="relative">
{/* <Time/> */}

        {/* <Suspense fallback={<div className='h-screen w-full absolute top-0 z-[200]'>
        <div className="h-screen relative  w-full flex justify-center items-center">
        <div id='ok' className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        <p className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>Chargement ...</p>
        </div>

  
        </div>}> */}
    <Header2 />
    {children}
    <Footer/>
    {/* </Suspense> */}


    <Analytics />

      </body>
    </html>
  )
}
