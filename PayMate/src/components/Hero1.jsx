import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero1() {
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRefs = useRef([]);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the navbar itself
    timeline.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0, backgroundColor: "transparent" },
      {
        y: 0,
        opacity: 1,
        backgroundColor: "black",
        duration: 0.8,
        ease: "power2.out",
      }
    );

    // Animate the logo with glow effect
    timeline.fromTo(
      logoRef.current,
      {
        scale: 0.5,
        opacity: 0,
        textShadow: "0px 0px 0px rgba(255, 255, 255, 0)",
      },
      {
        scale: 1,
        opacity: 1,
        textShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      },
      "<0.2"
    );

    // Animate the dropdown menu
    timeline.fromTo(
      dropdownRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-0.4"
    );

    // Animate the buttons sequentially
    buttonRefs.current.forEach((button, index) => {
      timeline.fromTo(
        button,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
        `-0.3 + ${index * 0.2}` // Stagger animations
      );
    });

    // Hero Section Animation
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo(
        heroTextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        heroImageRef.current,
        { scale: 0.8, opacity: 0, rotateY: -30 },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        },
        "-0.5"
      );
  }, []);

  return (
    <>
      <div
        style={{
          zIndex: 9999,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
        }}
        ref={navbarRef}
      >
        <div className="navbar bg-base-100 fixed">
          <div className="navbar-start">
            <div className="dropdown" ref={dropdownRef}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                style={{ zIndex: 1000 }}
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Previous Trips</a>
                </li>
                <li>
                  <a>Feedback</a>
                </li>
              </ul>
            </div>
            <div className="navbar-center">
              <a
                className="btn btn-ghost text-xl"
                ref={logoRef}
                style={{ color: "white" }}
              >
                PayMate
              </a>
            </div>
          </div>

          <div className="navbar-end">
            <button
              className="btn btn-ghost btn-circle"
              ref={(el) => (buttonRefs.current[1] = el)}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{ backgroundColor: "#1a1a1a", color: "white" }}
      >
        <div className="hero-content text-center" style={{ perspective: 1000 }}>
          <div ref={heroTextRef} className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">Welcome to PayMate</h1>
            <p className="text-lg mb-6">
              Simplify group expenses with our seamless tracking and sharing
              tools.
            </p>
            <button className="btn btn-wide bg-white text-black hover:bg-black hover:text-white">
              Get Started
            </button>
          </div>
          <div ref={heroImageRef} style={{ transformStyle: "preserve-3d" }}>
            <img
              src="https://framerusercontent.com/images/6zNZT7ggz7C9V6qk1QeUGnWyo.png?scale-down-to=1024"
              alt="Hero Graphic"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
