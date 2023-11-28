import React from 'react';
import herosectionimage from "../assets/herosectionimage.svg";
import { IoLocationSharp } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import {AiFillPlayCircle} from 'react-icons/ai';
import FIFA23 from "../assets/FIFA23.svg";
import BlackAndWhiteBusinessLogo101 from '../assets/BlackAndWhiteBusinessLogo101.svg';
import BlackAndWhiteBusinessLogo81 from '../assets/BlackAndWhiteBusinessLogo81.svg';
import BlackAndWhiteBusinessLogo51 from '../assets/BlackAndWhiteBusinessLogo51.svg';
import NBA2k23 from '../assets/NBA2k23.svg';
import play from '../assets/play.svg';
import herobg from '../assets/herobg.png'

const HomeHero = () => {

  const heroUrl = herobg
 

  return (
    <div className="w-full grid grid-cols-1 relative place-content-center md:place-content-start lg:grid-cols-2 h-screen md:mb-20 mb-10 " style={{
      backgroundImage: `url(${heroUrl}`,
      backgroundSize: "cover",
    }}>
    <div className="self-center w-[100%] pt-20 md:pt-32 px-4 md:px-14 lg:px-28 h-full">
      <p className="mb-5
      m-0.5">
        <span className="md:text-[25px] block md:inline text-center text-[30px] md:text-left font-semibold font-['Bungee Outline'] capitalize text">
          Get your game on at{" "}
        </span>
        <span className="text-[#1B1C57] block text-center md:text-xl md:text-left text-3xl font-[900] font-['Lexend'] capitalize">
          OBESE GAMING LOUNGE
        </span>
      </p>
      <hr className='mb-5 mx-auto md:mx-0 w-[60%] bg-amber-500 border-0 h-1 rounded-md'/>
      <p className=" text-[#626687] text-[12px] font-normal font-['Lexend'] mb-4 ">
        The ultimate gaming experience. With a wide variety of games to choose
        from, you can play to your heart's desire
      </p>
      <div className="relative">
      <div className="flex w-[85%] md:w-full items-center relative mb-5 md:mb-10 ">
        <IoLocationSharp className="absolute left-1 text-yellow-500" />
        <input
          type="text"
          placeholder="Search for the location you want"
          className="pl-6 py-1.5 outline-none rounded-3xl border text-neutral-400 text-sm  font-normal font-['Lexend'] leading-snug placeholder::placeholder-ellipsis-x-hidden placeholder::placeholder-ellipsis-text flex-1 placeholder:mr-10 md:placeholder:mr-10"
        />
        
        <button className="bg-[#10B981] flex items-center py-1 px-2 rounded-2xl absolute -right-1 text-white font-['Lexend'] text-md mr-2">
          <span className='text-[12px] hidden md:inline'>Search</span> <MdArrowForwardIos className="" />{" "}
        </button>
      </div>
      <img src={play} alt="" className=" absolute top-1 right-2 md:hidden hover:animate-ping cursor-pointer w-7"/>
      </div>

      <p className="text-neutral-400 text-center md:text-left md:mb-4 mb-5 text-sm font-normal font-['Lexend']">
        Available Game
      </p>
      <marquee>
        <div className="flex items-center justify-between">
        <div className="">
        <img src={FIFA23} alt="Available-games-image" className="w-8 md:w-12" />
        </div>
        <div className="">
        <img src={BlackAndWhiteBusinessLogo51} alt="Available-games-image" className="w-8 md:w-12" />
        </div>
        <div className="">
        <img src={BlackAndWhiteBusinessLogo81} alt="Available-games-image" className="w-8 md:w-12" />
        </div>
        <div className="">
        <img src={BlackAndWhiteBusinessLogo101} alt="Available-games-image" className="w-8 md:w-12" />
        </div>
        <div className="">
        <img src={NBA2k23} alt="Available-games-image" className="w-8 md:w-12"  />
        </div>
        </div>
      </marquee>
    </div>
    <div className="lg:h-full md:mt-10 lg:mt-auto hidden md:block md:mx-auto md:h-[80%]   md:w-[90%] lg:w-full relative top-0 bottom-0">
      <img src={herosectionimage} className="w-full h-full " alt="" />
      {/* <AiFillPlayCircle className="absolute top-[45%]  left-[50%] translate-[-50%, -50%] text-white/50 text-6xl"/> */}
      <img src={play} alt="" className="absolute  top-[40%]  left-[45%] hover:animate-ping cursor-pointer w-28 translate-['-50%, -50%']"/>
    </div>
    
  
    </div>
  
  )
}

export default HomeHero