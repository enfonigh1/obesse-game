import React from "react";
import {FaChessPawn} from 'react-icons/fa6';
import {GiConsoleController} from 'react-icons/gi';
import {SiEpicgames} from 'react-icons/si';
import {GiTennisCourt} from 'react-icons/gi';
import {BsArrowRight} from 'react-icons/bs';
import home from '../assets/gamewithus.png';
import {RxAvatar} from 'react-icons/rx';
import {BsFillTelephoneFill} from 'react-icons/bs';
import expbg from '../assets/Expbg.png';
import avatar from '../assets/avatargame.png'

const OurGames = () => {

  const expUrl = expbg

  return (
    <div className="grid md:grid-cols-2 mt-20 mb-16" style={{
      backgroundImage: `url(${expUrl}`,
      backgroundSize: "cover",
    }}>
      <div className=" px-4 md:px-8 lg:px-28  ">
        <p className="text-[#F59E0B] text-[.7rem] font-medium font-['Lexend'] flex items-center justify-center md:justify-start capitalize">
            <hr className="mr-2 h-0.5 w-10 bg-[#F59E0B]" />
          What Sets Us Apart
        </p>
        <h1 className="text-[#1B1C57] font-['Lexend] mt-2 font-bold text-[1.2rem] text-center md:text-left capitalize">The OGL gaming experience</h1>
        <p className="mt-5 text-center md:text-left text-[#626687] text-[.9rem] font-normal font-['Lexend']">
          When it comes to gaming lounges, Obese Gaming Lounge sets the standard
          for excellence
        </p>
        <small className="block mt-7 text-[#1B1C57] text-base font-semibold font-['Lexend'] text-center">
          Come in for <span className="hidden md:inline">:</span>
        </small>
        <div className="grid grid-cols-2 gap-x-4 px-4 md:px-8 lg:px-0 place-items-center lg:place-content-start gap-y-4 mt-5">
          <div className=""><div className="flex  items-center  text-[#3C4563] text-[.9rem] font-medium font-['Lexend'] capitalize">
            <SiEpicgames className="mr-2 "/>Console games
          </div>
          </div>
          <div className=""><div className="flex items-center  text-[#3C4563] text-[.9rem] font-medium font-['Lexend'] capitalize">
            <FaChessPawn className="mr-2"/>board games
          </div>
          </div>
          <div className=""><div className="flex items-center  text-[#3C4563] text-[.9rem]font-medium font-['Lexend'] capitalize">
            <GiTennisCourt className="mr-2"/>table Games
          </div>
          </div>
          <div className=""><div className="flex items-center  text-[#3C4563] text-[.9rem] font-medium font-['Lexend'] capitalize">
            <GiConsoleController className="mr-2"/> Matches
          </div>
          </div>
          
        </div>
        <div className="flex justify-between mt-10">
            <div className=" flex items-center">
                <img src={avatar} className=" w-10 md:w-12"/>
                <div className="">
                <p className="text-[#0E1735] md:text-[.9rem] font-['Lexend'] leading-5 text-[.8rem]">Contact For Inquire</p>
                <p className="text-[#888B97] md:text-[.9rem] font-['Lexend'] leading-normal text-[.7rem]">Manager</p>
                </div>
            </div>
            <button className="bg-[#10b981] flex items-center rounded-3xl text-white px-1.5 text-[.6rem] md:text-[.9rem]  font-semibold font-['Lexend'] "><BsFillTelephoneFill className="mr-2 text-[.4rem] md:text-[.9rem]" />Click to Inquire</button>
          </div>
      </div>
      <div className="relative px-4 mt-10 md:mt-0 md:px-8 lg:px-28">
        <img src={home} alt="our-games" className="block mx-auto" />
      </div>
    </div>
  );
};

export default OurGames;
