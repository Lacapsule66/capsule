import Team from '@/components/Team'
import Team2 from '@/components/Team2'
import React from 'react'
export const metadata = {
  title: "L'équipe | Agence la Capsule",
  description:
    " Agence la Capsule, une agence de communication digitale à Perpignan. Nous vous accompagnons dans la création de votre site internet, votre stratégie de communication digitale et votre référencement naturel.",
    alternates :{
      canonical: "https://www.agence-la-capsule.fr/team",
     
    },
  }
export default function page() {
  return (
    <div className='pt-16 '>
        <Team />
        <Team2 />
    </div>
  )
}
