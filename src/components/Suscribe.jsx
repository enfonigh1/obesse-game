import React from "react";
import backgroundImg from "../assets/gradientbackground.svg";
import { MdArrowForwardIos } from "react-icons/md";
import {MdMovieCreation} from 'react-icons/md';
import img1 from "../assets/fif23.png";
import img2 from "../assets/nba2k23.png";
import img3 from "../assets/nfs.png";
import img4 from "../assets/mariokart.png";
import img5 from "../assets/gow.png";
import img6 from "../assets/mk23.png";
import img7 from "../assets/tombraider.png";
import img8 from "../assets/gta5.png";


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
        <img src={img1} className=" absolute w-10 h-10 left-2 top-2 md:w-14  md:h-14 rounded-full md:left-10 md:top-4" alt="images" />
        <img src={img2} className=" absolute w-6 h-6 top-4 md:w-8  md:h-8 rounded-full md:left-40 md:top-4 " alt="images" />
        <img src={img3} className=" absolute w-8 h-8  md:w-14  md:h-14 rounded-full bottom-16 md:bottom-12 lg:bottom-8 left-16" alt="images" />
        <img src={img4} className=" absolute w-8 h-8 md:w-12  md:h-12 rounded-full bottom-20 left-40 md:bottom-10 lg:bottom-12" alt="images" />
        <img src={img5} className=" absolute w-10 h-10 md:w-14  md:h-14 rounded-full left-2 md:left-auto top-14 md:top-2 lg:top-14 right-44" alt="images" />
        <img src={img6} className=" absolute w-10 h-10 md:w-14  md:h-14 rounded-full right-40 bottom-24 md:bottom-12 lg:bottom-12" alt="images" />
        <img src={img7} className="absolute w-6 h-6 md:w-8  md:h-8 rounded-full right-5 top-16" alt="images" />
        <img src={img8} className=" absolute w-10 h-10 md:w-14  md:h-14 rounded-full right-20  bottom-10" alt="images" />
        <div className="text-center mt-10 text-blue-950 text-md md:text-3xl font-semibold font-['Lexend']  capitalize md:leading-10 leading-7">Subscribe For More Info<br/>and update from OGL</div>
        <div className=" mx-auto w-[85%] mt-5 flex items-center relative">
        <input type="text" className="w-full outline-none rounded-3xl pl-8 pr-24 md:pl-auto md:pr-0 md:px-10 shadow-md font-['Lexend'] text-neutral-400 text-sm font-medium leading-snug placeholder:font-['Lexend'] py-2.5" placeholder="Your email here"/>
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
