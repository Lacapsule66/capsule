import React from "react";
import Layout from "./Mep";
import Bananas from "./Bananas";

export default function Intro({ kill, speed, }) {
  return (
    <div className="fixed">
      <Layout />
      <div className="b h-screen w-screen absolute -z-10 " id="Bananas">
        {!kill && <Bananas  speed={speed} cameras={1} />}
      </div>
    </div>
    );
}