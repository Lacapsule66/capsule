import React, { Suspense, use, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Video() {
  const videoRef = useRef(null)
  useEffect(() => {
    gsap.to("#play", {
      scrollTrigger: {
        trigger: "#play",
        start: "top +=100",
        end: "bottom top",
     
        onEnter: () => videoRef.current.play(),
    
      }
    });
  
  
}, [])


 
  return (
   
    <div  id='play' className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20 bg-white">
        <video  ref={videoRef}  className=' object-cover w-screen h-[80vh]'  loop muted src="https://res.cloudinary.com/dcl00yipc/video/upload/v1694892452/video2_pxj5ol.mp4"></video>
    </div>

  )
}
