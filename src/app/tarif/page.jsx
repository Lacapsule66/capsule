import Pricing from '@/components/Pricing'
import React from 'react'
export const metadata = {
  title: "Tarif | Agence la Capsule",
  description:
    " Agence la Capsule, une agence de communication digitale à Perpignan. Nous vous accompagnons dans la création de votre site internet, votre stratégie de communication digitale et votre référencement naturel.",
    alternates :{
      canonical: "https://www.agence-la-capsule.fr/tarif",
     
    },
  }
export default function page() {
  return (
    <div className='h-screen '>
        <div className='pt-16 '>

            <Pricing />
        </div>
    </div>
  )
}
