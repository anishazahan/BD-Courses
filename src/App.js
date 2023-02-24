
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Courses from "./pages/courses/Courses";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/courses",
    element: <Courses></Courses>,
  },
]);


function App() {
  return (
    <>
       <RouterProvider router={router} /> 
    </>
  );
}

export default App;
