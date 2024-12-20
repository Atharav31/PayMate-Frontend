import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the navbar itself with a blur effect
    timeline.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
      }
    );

    // Animate the logo
    timeline.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
      "<0.2"
    );

    // Animate the dropdown menu
    timeline.fromTo(
      dropdownRef.current,
      { x: -50, opacity: 0, filter: "blur(10px)" },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      },
      "-0.4"
    );

    // Animate the buttons sequentially with a blur effect
    buttonRefs.current.forEach((button, index) => {
      timeline.fromTo(
        button,
        { scale: 0.5, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
        },
        `-0.3 + ${index * 0.2}` // Stagger animations
      );
    });
  }, []);

  return (
    <div
      style={{
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
                <a>Homepage</a>
              </li>
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Previous trips</a>
              </li>
            </ul>
          </div>
          <div
            className="navbar-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <a className="btn btn-ghost text-xl" ref={logoRef}>
              PayMate
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <button
            className="btn btn-ghost btn-circle"
            ref={(el) => (buttonRefs.current[0] = el)}
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
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
  );
}

export default Navbar;
