import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import { useAllContext } from "../../Context-Api/AllContext";
import './home.css'

  const TestMonial =()=>{

    const {getTestimonialData,testimonialData}=useAllContext();
    const api = "testmonial.json"
    useEffect(() => {
        getTestimonialData(api);
      }, []);
      console.log(testimonialData);
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 4000,
    }
    return (
      <div className="max-w-7xl px-5 lg:px-16 mx-auto space-y-10 ">
        <div className="text-center">
        <h2 className="inline text-2xl font-bold px-3 rounded-lg py-2 bg-secondary text-white">“শিক্ষার্থীরা যা বলছে” </h2>
        </div>
        <Slider {...settings} className=""
        >
         {
            testimonialData.map(singleItem=>{
                return (
                <div key={singleItem.id} className="border border-gray shadow px-3 py-5">
                        <div className="">
                            <div className="">
                                <img className="mx-auto" src={singleItem.img} alt="" />
                                <h2 className="text-center font-semibold text-secondary">{singleItem.name}</h2>
                            </div>
                           
                            <p className="text-[13px] text-center text-slate-600"> <span className="text-xl text-secondary font-extrabold">"</span> {singleItem.description}<span className="text-xl text-secondary font-extrabold">"</span></p> 
                        </div>
                </div>
                )
            })
         }
        </Slider>
      </div>
    );
  }

  export default TestMonial;