import React, { Suspense } from "react";
import Layout from "./Mep";
import Bananas from "./Bananas";

export default function Intro({ kill, speed, }) {
  return (
    <div className="fixed">
      <Layout />
      <Suspense fallback={<div className="h-screen w-full absolute top-0 z-[200]"> </div>}>
      <div className="b h-screen w-screen absolute -z-10 " id="Bananas">
        {!kill && <Bananas  speed={speed} cameras={1} />}
      </div>
    </Suspense>
    </div>
   

    );
}