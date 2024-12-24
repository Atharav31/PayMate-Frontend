import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/Hero3.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../store/slice1";
import { useNavigate } from "react-router-dom";

const Hero3 = () => {
  const [email, setEmail] = useState("");
  const [signUp, setSignUp] = useState(false);
  const nameRef = useRef(" ");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("niche ka code");
      if (response.status === 200) {
        console.log("Login successful");
        toast.success("Login Successful");
        dispatch(login(response.data.user));
        navigate("/loggedInUser");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
    console.log(nameRef.current?.value, "name");
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: {
          backgroundImage: `url(${backgroundImage})`,
        },
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <motion.div
          className="hero-content flex-col lg:flex-row-reverse"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Animated Text Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Do you often find yourself losing track of your expenses while
              traveling? Don’t worry, we’ve got your back! With our platform,
              you can easily save and organize all your trip expenses in one
              place. Sign in to your account today and take the first step
              towards stress-free expense management for all your adventures.
            </p>
          </motion.div>

          {/* Animated Form Section */}
          <motion.div
            className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="card-body" onSubmit={(e) => e.preventDefault()}>
              <motion.div
                className="form-control"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </motion.div>
              {signUp ? (
                <motion.div
                  className="form-control"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    ref={nameRef}
                    placeholder="name"
                    className="input input-bordered"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </motion.div>
              ) : null}
              <motion.div
                className="form-control"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-between">
                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label className="label">
                    <a
                      onClick={handleSignUp}
                      className="label-text-alt link link-hover"
                    >
                      New user ? Register here
                    </a>
                  </label>
                </div>
              </motion.div>
              <motion.div
                className="form-control mt-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {signUp ? (
                  <button className="btn btn-primary" onClick={handleSignUp}>
                    Sign up
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                )}
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Hero3;
