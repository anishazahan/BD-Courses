

import { Route, Routes } from "react-router-dom";
import CourseDetails from "./components/courses/CourseDetails";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/contact/Contact";
import MainCoursePage from "./pages/courses/MainCoursePage";
import Home from "./pages/Home/Home";
import Footer from "./shared/footer/Footer";
import Navbar from "./shared/Navbar";




function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<MainCoursePage/>}/>
      <Route path='/Courses/:heading' element={<CourseDetails/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
