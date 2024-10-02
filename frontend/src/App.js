// Import necessary components and libraries for routing and styling
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/write.scss";
import "./styles/single.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/navbar.scss";
import "./styles/home.scss";
import "./styles/login_register.scss";
import "@fortawesome/fontawesome-free/css/all.css";

// Create a layout component (used for most pages)
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Define the routing configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

// Define the main application component
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} /> {/* Provide the router to the app */}
      </div>
    </div>
  );
}

export default App;
