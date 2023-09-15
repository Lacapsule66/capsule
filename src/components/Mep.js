"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";

const Layout = () => {
//  useEffect(() => {
//     gsap.fromTo(
//       "#scale",
//       {
//         scale: "0.5",
//         opacity: "0",
//       },
//       {
//         duration: 0.8,
//         delay: 0.8,
//         scale: "1",
//         opacity: "1",
//       } 
//     );
//   }, []);
  return (
    <section className="absolute h-screen w-screen grid grid-cols-1 grid-rows-5 gap-4">
      <div className="row-span-2 ">
        <h1 className="text font-title text-6xl  m-16 p-2 md:text-9xl ">
          Agence <br /> La Capsule -
        </h1>
      </div>
      <div className="row-span-2 row-start-3">
        <h2 id="scale" className="text-6xl font-title  text-center lg:text-8xl p-2  overflow-hidden ">
          Faite un bond en avant
          <br /> dans le digital
        </h2>
      </div>
      <div className="row-start-5">
        {" "}
        {/* <div className="flex justify-center items-end ">
          <ul className="flex gap-16 pb-56 md:text-3xl text-xl ">
            <li>
              <Link href={"#contact"}> Nos Services</Link>
            </li>
            <li>
              <Link href={"#page2"}> Nos Services</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Layout;
