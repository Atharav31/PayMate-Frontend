import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import Main from "./components/Functionality/Main";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Functionality from "./components/Functionality/Functionality";
import Hero3 from "./components/Hero3";
import { Provider } from "react-redux";
import store from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { login } from "./store/slice1";
import LoggedInUser from "./components/Functionality/LoggedInUser";

function AppLayout() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (userData) {
      console.log("User Data: ", userData);
      return;
    }
    profile();
  }, []);

  const profile = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile", {
        withCredentials: true,
      });
      if (response.status === 200) {
        console.log("Profile successful");
        dispatch(login(response.data.user));
      }
    } catch (error) {
      console.log(error);

      if (error.response.status === 500) {
        console.log("User not logged in");
        navigate("/");
      }
    }
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
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
        path: "/hero3",
        element: <Hero3 />,
      },
      {
        path: "/loggedInUser",
        element: <LoggedInUser />,
      },
    ],
  },
]);

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
        "-=0.5"
      );
  }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
