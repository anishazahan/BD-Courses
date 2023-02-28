import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import MainCoursePage from "../pages/courses/MainCoursePage";
import Main from "./Main";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import CourseDetails from "../components/courses/CourseDetails";
import Login from "../Authentication/Login";
import SignUP from "../Authentication/SignUP";
import PrivateRoute from "../Authentication/PrivateRoute";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/courses",
                element:<MainCoursePage></MainCoursePage>
            },
            {
                path:"/:id",
                element:<CourseDetails></CourseDetails>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signUp",
                element:<SignUP></SignUP>
            },
        ]
    }
])