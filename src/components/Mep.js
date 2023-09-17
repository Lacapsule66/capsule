
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
      <div className="row-start-5">
        <h3 className="text-3xl font-title text-center lg:text-4xl p-2 tracking-widest ">
          Nous sommes une agence de communication digitale basée dans les Pyrénnées Orientales.
          <br />
          Nous accompagnons les entreprises dans leur transformation digitale.
        </h3>
      </div>
    </section>
  );
};

export default Layout;
