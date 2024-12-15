import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";

import Footer from "./components/Footer";
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        ".navbar",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        ".hero",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.inOut" },
        "-=0.5" // Overlap Hero1 with Navbar animation
      );
  }, []);

  return (
    <>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 />

      <Footer />
    </>
  );
}

export default App;
