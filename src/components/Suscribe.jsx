import React from "react";
import backgroundImg from "../assets/gradientbackground.svg";
import { MdArrowForwardIos } from "react-icons/md";
import {MdMovieCreation} from 'react-icons/md';
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
import img7 from "../assets/img7.svg";
import img8 from "../assets/img8.svg";


const Subscribe = () => {
  const imgUrl = backgroundImg;

  return (
    <div className="w-full px-4 md:px-28 mb-10">
      <div
        className=" max-w-6xl h-72 rounded-r-[32px] relative flex flex-col items-center"
        style={{
          backgroundImage: `url(${imgUrl}`,
          backgroundSize: "cover",
        }}
      >
        <img src={img1} className=" absolute w-8 left-2 top-2 md:w-auto md:left-10 md:top-4" alt="images" />
        <img src={img2} className=" absolute w-8 top-4 md:w-auto md:left-40 md:top-4 " alt="images" />
        <img src={img3} className=" absolute w-8  md:w-auto bottom-16 left-16" alt="images" />
        <img src={img4} className=" absolute w-8 md:w-auto bottom-20 left-44" alt="images" />
        <img src={img5} className=" absolute w-8 md:w-auto left-2 md:left-auto top-14 md:top-10 right-44" alt="images" />
        <img src={img6} className=" absolute w-8 md:w-auto right-40 bottom-24" alt="images" />
        <img src={img7} className=" absolute w-8 md:w-auto right-5  top-16" alt="images" />
        <img src={img8} className=" absolute w-8 md:w-auto right-20  bottom-10" alt="images" />
        <div className="text-center mt-10 text-blue-950 text-md md:text-3xl font-semibold font-['Lexend']  capitalize md:leading-10 leading-7">Subscribe For More Info<br/>and update from OGL</div>
        <div className=" mx-auto w-[280px] md:w-[500px] mt-5 flex items-center relative">
        <input type="text" className="w-full outline-none rounded-3xl pl-8 pr-24 md:pl-0 md:pr-0 md:px-10 shadow-md font-['Lexend'] text-neutral-400 text-sm font-medium leading-snug placeholder:font-['Lexend'] py-2.5" placeholder="Your email here"/>
        <MdMovieCreation className="absolute left-2 text-[#3B82F6]" />
        <button className="bg-[#10B981] flex items-center py-1.5 px-2 rounded-2xl absolute -right-1 font-['Lexend'] text-white text-[12px] tracking-tighter md:tracking-normal md:text-sm font-semibold leading-snug mr-2">
          Subscribe<MdArrowForwardIos className="" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
