import React, { Component } from "react";
import Slider from "react-slick";
import './home.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {FaLaptopCode} from "react-icons/fa"

// const settings = {
//   className: "center",
//   centerMode: true,
//   infinite: true,
//   centerPadding: "80px",
//   slidesToShow: 4,
//   speed: 500,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   dots: true,
//   slidesToScroll: 2
// }


export default class CatagorySlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
      autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
           <div className="slider-box justify-center items center border border-gray p-7 shadow w-full space-y-2 py-10">
              <div className="">
                <button className="text-5xl text-secondary font-medium"><FaLaptopCode></FaLaptopCode></button>
              </div>
            <h2>Web Development</h2>
           </div>
          </div>
          <div>
          <div className="slider-box justify-center items center border border-gray p-7 shadow w-full space-y-2 py-10">
              <div className="">
                <button className="text-5xl text-secondary font-medium"><FaLaptopCode></FaLaptopCode></button>
              </div>
            <h2>Web Development</h2>
           </div>
          </div>
          <div>
          <div className="slider-box justify-center items center border border-gray p-7 shadow w-full space-y-2 py-10">
              <div className="">
                <button className="text-5xl text-secondary font-medium"><FaLaptopCode></FaLaptopCode></button>
              </div>
            <h2>Web Development</h2>
           </div>
          </div>
          <div>
          <div className="slider-box justify-center items center border border-gray p-7 shadow w-full space-y-2 py-10">
              <div className="">
                <button className="text-5xl text-secondary font-medium"><FaLaptopCode></FaLaptopCode></button>
              </div>
            <h2>Web Development</h2>
           </div>
          </div>
          <div>
         
          </div>
          
        </Slider>
      </div>
    );
  }
}

