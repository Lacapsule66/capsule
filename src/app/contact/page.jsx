import Contact from '@/components/Contact'
import React from 'react'
export const metadata = {
  title: "Contactez nous | Agence la Capsule",
  description:
    " Agence la Capsule, une agence de communication digitale à Perpignan. Nous vous accompagnons dans la création de votre site internet, votre stratégie de communication digitale et votre référencement naturel.",
    alternates :{
      canonical: "https://www.agence-la-capsule.fr/contact",
     
    },
  }
export default function page() {
  return (
    <div className='pt-16 '>
        <Contact />
    </div>
  )
}
