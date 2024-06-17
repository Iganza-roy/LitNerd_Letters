import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/single",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  },

  {
    path: "/register",
    element: <Register/>
  },

  {
    path: "/login",
    element: <Login/>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>   
    </div>
  );
}

export default App;
