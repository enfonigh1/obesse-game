import React from 'react';
import BigEvent from '../assets/reviewimg1.png';
import FirstEvent from '../assets/godofwar.jpg';
import SecondEvent from '../assets/Gta.webp';
import ThirdEvent from '../assets/nbagame.jpg';
import {RxAvatar} from 'react-icons/rx';
import {BiTimeFive} from 'react-icons/bi';
import blogbg from '../assets/blogeventsbg.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const EventsPromosAndUpdates = () => {
  
  const blogUrl = blogbg 
  
  return (
    <div className='px-4 md:px-28 -mt-20 mb-20' style={{
      background: `url(${blogUrl}`,
      backgroundSize: "cover"
    }} >
        <div className="flex justify-center relative">
        <hr className="bg-[#F59E0B] w-10 justify-self-center absolute  border-[#F59E0B]  " />
        <h2 className=" text-center mt-1 mb-5 text-[#F59E0B] text-sm font-medium font-['Lexend'] capitalize">
          Keep Up with us
        </h2>
        
      </div>
      <p className="text-center text-[#1B1C57] text-[16px] font-semibold font-['Lexend'] capitalize">
        Blogs, Events, Promos And Update           
      </p>
      <button className="text-white mb-4 md:mb-0 block my text-[10px] mx-auto mt-5 bg-[#10B981] rounded-2xl py-1.5 px-3 text-[6px]emibold font-['Lexend']">STAY UPDATED</button>

      <div className="grid md:grid-cols-2 mt-10 md:mt-0">
        <div className='md:mr-28'>
        <Swiper 
          spaceBetween={5}
          direction={'vertical'}
          slidesPerView={3}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-80"
        >
          <SwiperSlide>
        <div className="flex items-center mb-5">
          <img className='w-24 h-24 bg-cover mr-5 rounded-md' src={FirstEvent} alt="" />
          <div className="">
            <div className="flex items-center">
              <RxAvatar className='mr-2'/>
              <p className="text-slate-700 text-sm font-bold  text-center md:text-left md:font-normal font-['Lexend'] leading-loose md:leading-snug">Announcement</p>
            </div>
            <p className=" text-[#1B1C57] text-[12px] md:text-[8px] font-medium  font-['Lexend'] capitalize ">Get Ready for the upcoming gaming competition</p>
            <div className="flex items-center">
            <BiTimeFive className='mr-2 text-[8px]' />
          <p className=" text-[10px] md:text-[6px] text-neutral-400 font-normal font-['Lexend']">4 min read | READ</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex items-center mb-5">
          <img className='w-24 h-24 bg-cover mr-5 rounded-md' src={SecondEvent} alt="" />
          <div className="">
            <div className="flex items-center">
              <RxAvatar className='mr-2'/>
              <p className="text-slate-700 text-sm font-bold  text-center md:text-left md:font-normal font-['Lexend'] leading-loose md:leading-snug">Announcement</p>
            </div>
            <p className=" text-[#1B1C57] text-[12px] md:text-[8px] font-medium  font-['Lexend'] capitalize ">Get Ready for the upcoming gaming competition</p>
            <div className="flex items-center">
            <BiTimeFive className='mr-2 text-[8px]' />
          <p className=" text-[10px] md:text-[6px] text-neutral-400 font-normal font-['Lexend']">4 min read | READ</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex items-center mb-5">
          <img className='w-16 h-24 bg-cover mr-5 rounded-md' src={ThirdEvent} alt="" />
          <div className="">
            <div className="flex items-center">
              <RxAvatar className='mr-2'/>
              <p className="text-slate-700 text-sm font-bold  text-center md:text-left md:font-normal font-['Lexend'] leading-loose md:leading-snug">Announcement</p>
            </div>
            <p className=" text-[#1B1C57] text-[12px] md:text-[8px] font-medium  font-['Lexend'] capitalize ">Get Ready for the upcoming gaming competition</p>
            <div className="flex items-center">
            <BiTimeFive className='mr-2 text-[8px]' />
          <p className=" text-[10px] md:text-[6px] text-neutral-400 font-normal font-['Lexend']">4 min read | READ</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex items-center mb-5">
          <img className='w-24 h-24 bg-cover mr-5 rounded-md' src={FirstEvent} alt="" />
          <div className="">
            <div className="flex items-center">
              <RxAvatar className='mr-2'/>
              <p className="text-slate-700 text-sm font-bold  text-center md:text-left md:font-normal font-['Lexend'] leading-loose md:leading-snug">Announcement</p>
            </div>
            <p className=" text-[#1B1C57] text-[12px] md:text-[8px] font-medium  font-['Lexend'] capitalize ">Get Ready for the upcoming gaming competition</p>
            <div className="flex items-center">
            <BiTimeFive className='mr-2 text-[8px]' />
          <p className=" text-[10px] md:text-[6px] text-neutral-400 font-normal font-['Lexend']">4 min read | READ</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
        </div>
        <div className="md:ml-20 mt-10 md:mt:0">
          <img className='bg-cover rounded-md' src={BigEvent} alt="" />
          <div className="flex items-center justify-center md:justify-start mt-5">
            <RxAvatar className='mr-2'/>
          <p className=" text-[#3C4563] text-sm font-nogmal font-['Lexend'] leading-loose md:leading-snug">Cameron Williamson</p>
          </div>
          <p className="text-[#1B1C57] text-[14px] text-center md:text-left md:text-[16px] font-medium font-['Lexend'] capitalize
          mt-2">12 Things to know before buying a house</p>
          <p className="md:text-[10px] text-[14px]  mt-2 font-normal font-['Lexend'] text-[#626687] ">Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when want to buy a house</p>
          
          <div className="flex items-center justify-center md:justify-start mt-2 text-[10px] md:text-[8px]">
            <BiTimeFive className='mr-1 text-[#888B97] '/>
          <p className="text-[#888B97] font-normal font-['Lexend'] text-[10px] md:text-[6px]">8 min read | READ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPromosAndUpdates   