import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { IoCloudOfflineSharp } from "react-icons/io5";
import { BiSolidVideoRecording } from "react-icons/bi";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {RxAvatar} from 'react-icons/rx';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Available.css'
import snooker from '../../assets/snooker.svg';
import football from '../../assets/gif/football.png';
import basketball from '../../assets/gif/basketball.png';





const AvailableGames = () => {
  return (
    <div className="px-4 md:px-8 lg:px-28">
      <div className="text-[#F59E0B] mb-10 md:mb-2 font-['Lexend'] capitalize font-semibold text-[16px] md:text-xs text-center md:text-left ">Watch online</div>
      <div className="flex justify-between mb-10 md:mb-0">
        <h1 className="text-[#1B1C57] text-sm md:text-3xl font-bold font-['Lexend'] capitalize">
          live stream
        </h1>
        <ul className="flex">
          <li>
            <a
              href=""
              className='md:px-4 md:py-2 px-2.5 py-1 mr-3 md:mr-4 items-center bg-[#D1FAE5] text-lg font-medium font-["Lexend"] flex leading-7 rounded-3xl capitalize  text-[#10B981]'
            >
              <AiFillHome className="md:mr-2" />
              <span className="hidden md:inline">live</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className='md:px-4 md:py-2 px-2.5 py-1 border mr-3 md:mr-4  rounded-3xl   font-["Lexend"] flex leading-7 items-center text-[#888B97] capitalize text-lg font-medium'
            >
              <IoCloudOfflineSharp className="md:mr-2" />
              <span className="hidden md:inline">offline</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className='md:px-4 md:py-2 px-2.5 py-1 border mr-3 md:mr-4 rounded-3xl  font-["Lexend"] flex leading-7 items-center text-[#888B97] capitalize text-lg font-medium'
            >
              <BiSolidVideoRecording className="md:mr-2" />
              <span className="hidden md:inline">recorded</span>
            </a>
          </li>
        </ul>
        <div className="flex">
          <button>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>

      

      <div className="my-4">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img src={football} alt="GIF" width="340" height="552" className="rounded-xl relative"/>
            <div className="">
              <p className="text-slate-900 text-[12px] text-center md:text-left md:text-sm font-medium font-['Lexend'] ">Roselands House</p>
              <small className="text-[#0E1735] text-center md:text-left block text-sm  font-sm font-['Lexend'] ">$35,000</small>
              <div className="flex flex-col md:flex-row items-center mt-2">
                <RxAvatar className="mr-2 text-xl" />
              <div>
              <p className="text-[#0E1735] mt-2 md:mt-0 leading-normal text-[.8rem] font-medium font-['Lexend'] ">Bestplayer</p>
              <small className="text-[#888B97] text-center md:text-left block text-[.8rem] md:text-[.6rem]  font-normal font-['Lexend'] font-md">Team play</small>
              </div>
              </div>
            </div>
        </SwiperSlide>
          <SwiperSlide>
            <img src={snooker} alt="GIF" width="340" height="552" className="rounded-xl"/>
            <div className="">
              <p className="text-slate-900 text-[12px] text-center md:text-left md:text-sm font-medium font-['Lexend'] ">Roselands House</p>
              <small className="text-[#0E1735] text-center md:text-left block text-sm  font-sm font-['Lexend'] ">$35,000</small>
              <div className="flex items-center flex-col md:flex-row  mt-2">
                <RxAvatar className="mr-2 text-xl" />
              <div>
              <p className="text-[#0E1735] mt-2 md:mt-0 leading-normal text-[.8rem] font-medium font-['Lexend'] ">Bestplayer</p>
              <small className="text-[#888B97] text-center md:text-left block text-[.8rem] md:text-[.6rem]  font-normal font-['Lexend'] font-md">Team play</small>
              </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={basketball} alt="GIF" width="340" height="552" className="rounded-xl"/>
            <div className="">
              <p className="text-slate-900 text-[12px] text-center md:text-left md:text-sm font-medium font-['Lexend'] ">Roselands House</p>
              <small className="text-[#0E1735] text-center md:text-left block text-sm  font-sm font-['Lexend'] ">$35,000</small>
              <div className="flex flex-col md:flex-row items-center mt-2">
                <RxAvatar className="mr-2 text-xl" />
              <div>
              <p className="text-[#0E1735] mt-2 md:mt-0 leading-normal text-[.8rem] font-medium font-['Lexend'] ">Bestplayer</p>
              <small className="text-[#888B97] text-center md:text-left block text-[.8rem] md:text-[.6rem]  font-normal font-['Lexend'] font-md">Team play</small>
              </div>
              </div>
            </div>
        </SwiperSlide>
          <SwiperSlide>
            <img src={snooker} alt="GIF" width="340" height="452" className="rounded-xl"/>
            <div className="">
              <p className="text-slate-900 text-[12px] text-center md:text-left md:text-sm font-medium font-['Lexend'] ">Roselands House</p>
              <small className="text-[#0E1735] text-center md:text-left block text-sm  font-sm font-['Lexend'] ">$35,000</small>
              <div className="flex flex-col md:flex-row  items-center mt-2">
                <RxAvatar className="mr-2 text-xl" />
              <div>
              <p className="text-[#0E1735] mt-2 md:mt-0 leading-normal text-[.8rem] font-medium font-['Lexend'] ">Bestplayer</p>
              <small className="text-[#888B97] text-center md:text-left block text-[.8rem] md:text-[.6rem]  font-normal font-['Lexend'] font-md">Team play</small>
              </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default AvailableGames;
