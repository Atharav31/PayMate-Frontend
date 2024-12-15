import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1";
import Login from "./components/Login";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";

function App() {
  const [count, setCount] = useState(0);

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
