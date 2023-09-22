"use client"
import Image from 'next/image'
import Intro from '@/components/Intro'
import React,  {Suspense, useState, useRef, useEffect} from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Pricing from '@/components/Pricing'
import Example from '@/components/List'
import Techno from '@/components/Techno';
import Service from '@/components/Service';
import Video from '@/components/Video';
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [kill, setKill] = useState(false);

  const [speed, setSpeed] = useState(1);
  const ref = useRef(null);
  useEffect(() => {
    const split3 = new SplitText("#scale3", { type: "chars, words, lines" });
    gsap.fromTo(split3.words, {

     
      y: 250,
      // skewY: 10,
      // skewX: 10,
      scale: 0.5,
      rotation: 45,

    }, {
      delay: 0.8,
      opacity: 1,
      y: 0,
      skewY: 0,
      skewX: 0,
      scale: 1,
      rotation: 0,
      stagger: 0.08,
      duration: 0.66,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#scale3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse",
      }
    });
    const split2 = new SplitText("#scale2", { type: "chars, words, lines" });
    gsap.fromTo(split2.words, {

     
      y: 250,
      // skewY: 10,
      // skewX: 10,
      scale: 0.5,
      rotation: 90,

    }, {
      delay: 0.8,
      opacity: 1,
      y: 0,
      skewY: 0,
      skewX: 0,
      scale: 1,
      rotation: 0,
      stagger: 0.08,
      duration: 0.66,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#scale2",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse",
      }
    });
    const split = new SplitText("#scale", { type: "chars, words, lines" });
    gsap.fromTo(split.words, {

     
      y: 250,
      // skewY: 10,
      // skewX: 10,
      scale: 0.5,
      rotation: 90,

    }, {
      delay: 2.1,
      opacity: 1,
      y: 0,
      skewY: 0,
      skewX: 0,
      scale: 1,
      rotation: 0,
      stagger: 0.08,
      duration: 0.66,
      ease: "power2.out",
     
    });
    
   
    
  }, []);

  useEffect(() => {
   
      
      
    // Définissez votre animation GSAP ici
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".r", // Sélectionnez l'élément qui déclenchera l'animation
        start: "top top", // Démarrez l'animation lorsque le haut de l'élément est en haut de la fenêtre
        endTrigger: ".r", // Sélectionnez l'élément qui terminera l'animation
        end: "70% top", // Terminez l'animation lorsque le haut de l'élément est en haut de la fenêtre
        scrub: true, // Permet à l'animation de se mettre à jour en temps réel lors du défilement
        onUpdate: (self) => {
          // Mettez à jour la valeur de speed en fonction du défilement
          const maxSpeed = 30; // Valeur maximale pour speed
          const scrollProgress = self.progress; // Progression de défilement actuelle (entre 0 et 1)
          const newSpeed = Math.ceil(scrollProgress * maxSpeed); // Calculez la nouvelle valeur de speed
          setSpeed(newSpeed); // Mettez à jour la valeur de speed dans votre état (utilisez useState)
        },
        onLeave: () => {
          // Fonction appelée lorsque l'élément déclencheur quitte la fenêtre
          setKill(true);
          console.log("kill");
        },
        onEnterBack: () => {
          // Fonction appelée lorsque l'élément déclencheur entre dans la fenêtre
          setKill(false);
        },
      },
    });

    // Ajoutez les animations souhaitées à votre timeline GSAP
    timeline.to("#Bananas", { speed: speed });
   

    // Nettoyez l'animation lorsque le composant est démonté
    return () => {
      timeline.kill();
    };


   
  }, []); 
  return (
    <main className="relative h-h300 overflow-x-hidden">
      <Suspense fallback={    <div className="r relative w-screen h-[120vh]">
</div>}>
    <div className="r relative w-screen h-[120vh]">
     
          <Intro kill={kill} speed={speed} cameras={1} />
       
    </div>
    </Suspense>
    <div className="r relative z-10 w-screen h-full bg-gray-900">
      <Example />
      <Service />
      <Video />
      <Pricing />
      <Techno />
     
        </div>
   
  </main>
  )
}
