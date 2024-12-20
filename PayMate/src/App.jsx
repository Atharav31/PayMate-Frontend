import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import Main from "./components/Functionality/Main";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Functionality from "./components/Functionality/Functionality";
import Hero3 from "./components/Hero3";

function AppLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

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

  const appLayout = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/functionality",
          element: <Functionality />,
        },
        {
          path: "/login",
          element: <Hero3 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appLayout} />;
}

export default App;
