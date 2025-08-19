// import React from "react";
// import { ReactLenis, useLenis } from "lenis/react";
// import Header from "./Component/Header"
// import Hero from "./Page/Hero"
// import OurServices from "./Page/Our_services"
// import AboutMarkiva from "./Page/About_Markiva"
// import GetinTouch from "./Page/Get_In_Touch"

// export default function App() {
//   return (
//        <ReactLenis root>  
       
//       <Header/>
//       <main>
//       <Hero/>
//       <OurServices/>
//       <AboutMarkiva/>
//       <GetinTouch/>
//       </main>
//       </ReactLenis>
      
   
//   )
// }

import React from "react";
import { ReactLenis } from "lenis/react";
import Header from "./Component/Header";
import Hero from "./Page/Hero";
import OurServices from "./Page/Our_services";
import AboutMarkiva from "./Page/About_Markiva";
import GetinTouch from "./Page/Get_In_Touch";
import DotGrid from "./Component/DotGrid"; // 👈 Import your DotGrid

export default function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* DotGrid Background */}
        <div className="fixed inset-0 -z-10">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#570029"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Foreground Content */}
        <Header />
        <main>
          <Hero />
          <OurServices />
          <AboutMarkiva />
          <GetinTouch />
        </main>
      </div>
    </ReactLenis>
  );
}
