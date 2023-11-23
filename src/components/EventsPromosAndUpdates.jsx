import React, { useState } from "react";
import BigEvent from "../assets/reviewimg1.png";
import FirstEvent from "../assets/godofwar.jpg";
import SecondEvent from "../assets/Gta.webp";
import ThirdEvent from "../assets/nbagame.jpg";
import { RxAvatar } from "react-icons/rx";
import { BiTimeFive } from "react-icons/bi";
import blogbg from "../assets/blogeventsbg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { compileString } from "sass";

const EventsPromosAndUpdates = () => {
  const blogUrl = blogbg;

  const [zoom, setZoom] = useState(false);

  const showDetailedInfo = () => {
    setZoom(true);
    
  };

  const closeDetailedInfo = () => {
    setZoom(false);
  };

  return (
    <div className="px-4 md:px-8 lg:px-28 -mt-20 mb-20" style={{
        background: `url(${blogUrl}`,
        backgroundSize: "cover",
      }}>
      <div className="flex justify-center relative">
        <hr className="bg-[#F59E0B] w-10 justify-self-center absolute  border-[#F59E0B]  " />
        <h2 className=" text-center mt-1 mb-5 text-[#F59E0B] text-sm font-medium font-['Lexend'] capitalize">
          Keep Up with us
        </h2>
      </div>
      <p className="text-center text-[#1B1C57] text-[16px] font-semibold font-['Lexend'] capitalize">
        Blogs, Events, Promos And Update
      </p>
      <button className="text-white mb-4 md:mb-0 block my text-[10px] mx-auto mt-5 bg-[#10B981] rounded-2xl py-1.5 px-3 text-[6px]emibold font-['Lexend']">
        STAY UPDATED
      </button>

      <div className="grid md:grid-cols-2 mt-10 md:mt-0">
        <div className="lg:mr-28 flex justify-center items-center">
          <Swiper
            spaceBetween={20}
            direction={"vertical"}
            slidesPerView={3}
            loop={true}
            click={console.log("swiper clicked")}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-80 flex mx-auto"
          >
            <SwiperSlide>
              <div className="flex items-center mb-5">
                <img
                  className="w-24 h-24 bg-cover mr-5 rounded-md"
                  src={FirstEvent}
                  alt=""
                />
                <div className="">
                  <div className="flex items-center cursor-pointer">
                    <RxAvatar className="mr-2" />
                    <h2 className="text-slate-700 text-[14px] md:text-[16px] font-bold  text-center md:text-left  font-['Lexend'] leading-loose md:leading-7">
                      Announcement
                    </h2>
                  </div>
                  <p className="  text-[#1B1C57] text-[12px] md:text-[14px] xl:text-[12px] font-medium no-scrollbar  font-['Lexend'] capitalize leading-normal mb-2 overflow-y-auto h-14 md:h-16 break-words md:break-normal">
                    Get Ready for the upcoming gaming competition
                  </p>
                  <div className="flex items-center cursor-pointer">
                    <BiTimeFive className="mr-2 text-[8px]" />
                    <p className=" text-[10px] md:text-[14px] text-neutral-400 font-normal font-['Lexend']">
                      4 min read | READ
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => console.log("SwiperSlide clicked")}>
              <div className="flex items-center mb-5" >
                <img
                  className="w-24 h-24 bg-cover mr-5 rounded-md"
                  src={SecondEvent}
                  alt=""
                  onClick={() => {setZoom(true)
                  console.log("zooming")
                  }}
                />
                <div className="relative">
                  <div className="flex items-center cursor-pointer">
                    <RxAvatar className="mr-2" />
                    <h2 className="text-slate-700 text-[14px] md:text-[16px] font-bold  text-center md:text-left  font-['Lexend'] leading-loose md:leading-7">
                      Announcement
                    </h2>
                  </div>
                  <p className=" text-[#1B1C57] text-[12px] md:text-[14px] xl:text-[12px] font-medium no-scrollbar  font-['Lexend'] capitalize leading-normal mb-2 overflow-y-auto h-14 md:h-16 break-words md:break-normal">
                    <h3 className="">Get Ready for the upcoming gaming competition</h3>
                    Console gaming has become a widespread form of
                    entertainment, offering immersive experiences with stunning
                    graphics and realistic gameplay. Players can enjoy a diverse
                    range of genres, from action-packed adventures to strategic
                    simulations, all from the comfort of their living rooms.
                  </p>
                  <div className="flex items-center cursor-pointer mb-2">
                    <BiTimeFive className="mr-2 text-[8px]" />
                    <p className=" text-[10px] md:text-[14px] text-neutral-400 font-normal font-['Lexend']">
                      4 min read | READ
                    </p>
                  </div>
                </div>
              </div>

              {zoom && (
                <div className="absolute z-30 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-[90vw] w-[90%] bg-white">
                  {/* ... zoomed-in content */}
                  <button
                    className="absolute top-2 right-2 text-white text-xl"
                    onClick={closeDetailedInfo}
                  >
                    Close
                  </button>
                </div>
              )}
            </SwiperSlide>
            {/* ... other SwiperSlides */}
          </Swiper>
        </div>
        {/* ... other components */}
      </div>
    </div>
  );
};

export default EventsPromosAndUpdates;
