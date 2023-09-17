
import React, { useEffect } from "react";


const Layout = () => {
 
  return (
    <section className="absolute h-screen w-screen grid grid-cols-1 grid-rows-5 gap-4">
      <div className="row-span-2 ">
        <h1 className="text font-title text-6xl tracking-widest  m-16 p-2 md:text-9xl ">
          Agence <br /> La Capsule -
        </h1>
      </div>
      <div className="row-span-2 row-start-3">
        <h2 id="scale" className="text-6xl font-title tracking-widest text-center lg:text-8xl p-2  overflow-hidden ">
        Faites un bond en avant
          <br /> dans le digital
        </h2>
      </div>
     <div className="row-span-1 row-start-5 flex justify-center">
     <svg id="anim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.3} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
      </div>
    </section>
  );
};

export default Layout;
