import React from "react";
import Obese1 from "../assets/reviewimg1.png";
import Obese2 from "../assets/Obese2.svg";
import Obese3 from "../assets/reviewimg3.png";
import avatar from "../assets/avatarreview.png";
import star from "../assets/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OurReview = () => {
  return (
    <div className="px-4 md:px-28 md:mb-40">
      <div className="flex justify-center relative">
        <hr className="bg-[#F59E0B] w-10 justify-self-center absolute  border-amber-500 md:mb-5 " />
        <h2 className=" text-center mt-3 md:mt-1 mb-5 text-[#F59E0B] md:text-sm  font-medium font-['Lexend'] capitalize">
          See Our Review
        </h2>
      </div>
      <p className="text-center text-[#1B1C57] text-lg md:text-3xl font-semibold font-['Lexend'] capitalize">
        What Our User Say About Us
      </p>
      <div className="flex justify-between mt-5">
        <Swiper 
          spaceBetween={5}          
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-96 lg:h-80"
        >
          <SwiperSlide >
            <div className="relative flex justify-center">
              <img src={Obese1} className=" md:h-80 lg:h-72 rounded-md object-cover" alt="reviews" />
              <div className="absolute shadow-sm text-slate-500 text-sm font-normal py-4 px-5  leading-normal bg-white top-[50%] w-[90%]  font-['Lexend'] p-2 rounded-2xl overflow-hidden text-ellipsis">
                <h1 className="text-[#1B1C57] text-[10px] md:text-[10px] font-bold md:font-semibold font-['Lexend'] capitalize mb-1 md:mb-2">
                  Best! I got the house I wanted through Hounter
                </h1>
                <p className="text-['#626687'] text-[10px] md:text-[10px] font-normal font-['Lexend'] md:mb-5 mb-2 leading-normal h-8 md:h-16 overflow-y-auto text-overflow-scroll">
                  I was finally able to sell my house quickly through Hounter by
                  immediately setting me up with people who wanted my house. I
                  also do not get a discount from the sale of my house.
                  Awesome!.
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src={avatar} alt="avatar" className="w-6" />
                    <div className="">
                      <h4 className="text-[8px] md:text-[8px]">Courtney Henry</h4>
                      <p className="text-[8px] md:text-[8px]">CEO Andarafish</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src={star} alt="stars" className="w-3 mr-1" />
                    <h5>4.3</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center">
              <img src={Obese2} className=" md:h-80 lg:h-72 rounded-md object-cover " alt="reviews" />
              <div className="absolute shadow-sm text-slate-500 text-sm font-normal py-4 px-5  leading-normal bg-white top-[50%] w-[90%]  font-['Lexend'] p-2 rounded-2xl overflow-hidden text-ellipsis">
                <h1 className="text-[#1B1C57] text-[10px] md:text-[10px] font-bold md:font-semibold font-['Lexend'] capitalize mb-1 md:mb-2">
                  Best! I got the house I wanted through Hounter
                </h1>
                <p className="text-['#626687'] text-[10px] md:text-[10px] font-normal font-['Lexend'] md:mb-5 mb-2 leading-normal h-8 md:h-16 overflow-y-auto text-overflow-scroll">
                  Through this website I can get a house with the type and
                  specifications I want very easily, without a complicated
                  process to be able to find information on the house we want.
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src={avatar} alt="avatar" className="w-6" />
                    <div className="">
                      <h4 className="text-[8px] md:text-[8px]">Danielle Russel</h4>
                      <p className="text-[8px] md:text-[8px]">Managing Director</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src={star} alt="stars" className="w-3 mr-1" />
                    <h5>4.3</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center">
              <img src={Obese3} className=" md:h-80 lg:h-72 rounded-md object-cover" alt="reviews" />
              <div className="absolute shadow-sm text-slate-500 text-sm font-normal py-4 px-5  leading-normal bg-white top-[50%] w-[90%]  font-['Lexend'] p-2 rounded-2xl overflow-hi text-ellipsis">
                <h1 className="text-[#1B1C57] text-[10px] md:text-[10px] font-bold md:font-semibold font-['Lexend'] capitalize mb-1 md:mb-2">
                  Through the Hounter, I can get a house for my self
                </h1>
                <p className="text-['#626687'] text-[10px] md:text-[10px] font-normal font-['Lexend'] md:mb-5 mb-2 leading-normal h-8 md:h-16 overflow-y-auto text-overflow-scroll">
                  By looking for information about what kind of house we want,
                  we managed to get the house we wanted very quickly, and
                  directly connected with the seller to be able to ask about the
                  details, very helpful!
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src={avatar} alt="avatar" className="w-6" />
                    <div className="">
                      <h4 className="text-[8px] md:text-[8px]">Esther Howard</h4>
                      <p className="text-[8px] md:text-[8px]">Head of Marketing</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src={star} alt="stars" className="w-3 mr-1" />
                    <h5>4.3</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurReview;
