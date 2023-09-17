import Header2 from '@/components/Header2'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Time from '@/components/Time'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'La Capsule - Agence de communication digitale',
  description: 'Agence de communication digitale basée dans les Pyrénées Orientales. Nous accompagnons les entreprises dans leur transformation digitale.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="relative">
<Time/>

        <Suspense fallback={<div className='h-screen w-full absolute top-0 z-[200]'>
        <div className="h-screen relative  w-full flex justify-center items-center">
        <div id='ok' className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        <p className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>Chargement ...</p>
        </div>

  
        </div>}>
    <Header2 />
    {children}
    <Footer/>
    </Suspense>



      </body>
    </html>
  )
}
