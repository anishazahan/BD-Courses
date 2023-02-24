

import { Route, Routes } from "react-router-dom";
import Courses from "./pages/courses/Courses";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar";



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Courses/>}/>
    </Routes>
      
    </>
  );
}

export default App;
