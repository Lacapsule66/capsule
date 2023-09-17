
import React from "react";


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
     
    </section>
  );
};

export default Layout;
