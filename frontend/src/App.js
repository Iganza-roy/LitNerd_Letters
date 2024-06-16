import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/login";
import Write from "./pages/Write";
import Single from "./pages/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the homepage</div>,
  },

  {
    path: "/register",
    element: <Register/>
  },

  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/write",
    element: <Write/>
  },

  {
    path: "/single",
    element: <Single/>
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
