import React from "react";
import Obese1 from "../assets/reviewimg1.png";
import Obese2 from "../assets/reviewimg2.png";
import Obese3 from "../assets/reviewimg3.png";
import avatar1 from "../assets/ghanaperson1.png";
import avatar2 from "../assets/ghanaperson2.png";
import avatar3 from "../assets/ghanaperson3.png";
import star from "../assets/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGamepad } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OurReview = () => {
  return (
    <div className="px-4 md:px-28 mb-2 sm:mb-28 md:mb-40 2xl:mb-64">
      <div className="flex justify-center relative">
        <hr className="bg-[#F59E0B] w-10 justify-self-center absolute  border-amber-500 md:mb-5" />
        <h2 className=" text-center mt-3 md:mt-1 mb-5 text-[#F59E0B] font-medium font-['Lexend'] capitalize">
          Services
        </h2>
      </div>
      <p className="text-center text-[#1B1C57] text-lg md:text-3xl font-semibold font-['Lexend'] capitalize">
        What We Provide
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
          className="mySwiper h-96  2xl:h-full"
        >
          <SwiperSlide>
            <div className="relative flex justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={Obese1}
                  className="block mx-auto rounded-md object-cover  object-center "
                  alt="reviews"
                />
                <div className="absolute shadow-sm  text-slate-500 font-normal py-2 px-4  leading-normal bg-white top-[82%] md:top-[70%] 2xl:top-[70%] w-[90%]  font-['Lexend'] p-2 rounded-2xl text-ellipsis">
                  <h1 className="text-[#1B1C57] text-[12px] lg:text-[10px] 2xl:text-[16px] font-bold md:font-semibold font-['Lexend'] capitalize mb-1 md:mb-2">
                    Console Gaming
                  </h1>
                  <h2 className="text-['#626687'] text-[12px] lg:text-[10px] 2xl:text-[16px] font-semibold flex item-center mb-2">
                    <FaGamepad className="text-[#1B1C57] mr-1 text-[14px] " />{" "}
                    Game On, Champ!
                  </h2>
                  <p className="text-['#626687'] text-[12px] lg:text-[10px] 2xl:text-[16px] font-normal font-['Lexend'] leading-normal h-8 md:h-16 overflow-y-auto text-overflow-scroll">
                    Dive into awesome games on our cool game consoles. From
                    action to puzzles, we've got games for everyone. It's like
                    your own gaming paradise!
                  </p>
                  <div className="flex justify-between">
                    <img
                      src={avatar3}
                      alt="avatar"
                      className="w-6 h-6 self-center rounded-full 2xl:w-8 mr-2 2xl:h-8"
                    />

                    <div className="mt-1">
                      <p className="text-[8px] xl:text-[8px] 2xl:text-[9px] ">
                        🎮⚽Exciting,Dynamic,Unparalleled,Cutting-edge,Vibrant🎉🕹️🏀.
                      </p>
                      <h4 className="text-[8px] xl:text-[8px] 2xl:text-[12px] flex font-bold items-center mr-2">
                        Henry Kyei Baffour,
                        <p className="text-[8px] xl:text-[8px] 2xl:text-[12px]">
                          Banker
                        </p>
                      </h4>
                    </div>

                    <div className="flex items-center">
                      <img
                        src={star}
                        alt="stars"
                        className="w-3 2xl:w-5 mr-1"
                      />
                      <h5 className="text-[]">4.3</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={Obese2}
                  className="block mx-auto rounded-md object-cover  object-center"
                  alt="reviews"
                />
                <div className="absolute shadow-sm  text-slate-500  font-normal py-2 px-4  leading-normal bg-white top-[82%] md:top-[70%] 2xl:top-[70%] w-[90%]  font-['Lexend'] p-2 rounded-2xl text-ellipsis">
                  <h1 className="text-[#1B1C57] text-[12px] lg:text-[10px] 2xl:text-[16px] font-bold md:font-semibold font-['Lexend'] capitalize mb-1 md:mb-2">
                    Live Sports
                  </h1>
                  <h2 className="text-['#626687'] text-[12px] lg:text-[10px] 2xl:text-[16px] font-semibold flex item-center mb-2">
                    <PiTelevisionSimple className="text-[#1B1C57] mr-1 text-[14px] " />{" "}
                    Sports Fans, Rejoice
                  </h2>
                  <p className="text-['#626687'] text-[12px] lg:text-[10px] 2xl:text-[16px] font-normal font-['Lexend'] leading-normal h-8 md:h-16 overflow-y-auto text-overflow-scroll">
                    Catch all the live sports action here! Big screens, loud
                    cheers – it's sports excitement at its best. Cheer for your
                    team and soak in the energy!
                  </p>
                  <div className="flex justify-between">
                    <img
                      src={avatar1}
                      alt="avatar"
                      className="w-6 h-6 self-center rounded-full 2xl:w-8 mr-2 2xl:h-8"
                    />

                    <div className="mt-1">
                      <p className="text-[8px] xl:text-[8px] 2xl:text-[9px] ">
                        ⚽📺 Thrilling Gaming Haven. 🏀🎮
                      </p>
                      <h4 className="text-[8px] xl:text-[8px] 2xl:text-[12px] flex font-bold items-center mr-2">
                        Jerry Kortey,
                        <p className="text-[8px] xl:text-[8px] 2xl:text-[12px]">
                          Student, Knust
                        </p>
                      </h4>
                    </div>

                    <div className="flex items-center">
                      <img
                        src={star}
                        alt="stars"
                        className="w-3 2xl:w-5 mr-1"
                      />
                      <h5 className="text-[]">4.3</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={Obese3}
                  className="block mx-auto rounded-md object-cover  object-center"
                  alt="reviews"
                />
                <div className="absolute shadow-sm  text-slate-500 h-auto  font-normal py-2 px-4  leading-normal bg-white top-[82%] md:top-[70%] 2xl:top-[70%] w-[90%]  font-['Lexend'] p-2 rounded-2xl text-ellipsis">
                  <h1 className="text-[#1B1C57] text-[12px] lg:text-[10px] 2xl:text-[16px] font-bold md:font-semibold font-['Lexend'] capitalize mb-1 md:mb-2">
                    Babering Saloon
                  </h1>
                  <h2 className="text-['#626687'] text-[12px] lg:text-[10px] 2xl:text-[16px] font-semibold flex item-center mb-2">
                    <p className="text-[#1B1C57] mr-1">💇‍♂️</p> Look Sharp, Feel
                    Great
                  </h2>
                  <p className="text-['#626687'] text-[12px] lg:text-[10px] 2xl:text-[16px] font-normal font-['Lexend']  leading-normal h-8 md:h-16 overflow-y-auto text-overflow-scroll">
                    Need a haircut? Our barbers are here for you! Get a stylish
                    cut while you relax. Leave looking sharp and feeling
                    awesome.
                  </p>
                  <div className="flex justify-between">
                    <img
                      src={avatar2}
                      alt="avatar"
                      className="w-6 h-6 self-center rounded-full 2xl:w-8 mr-2 2xl:h-8"
                    />

                    <div className="mt-1">
                      <p className="text-[8px] xl:text-[8px] 2xl:text-[9px] ">
                        🎮💇‍♂️Gaming Paradise, Barber Excellence, Sports
                        Excitement. 🕹️✂️
                      </p>
                      <h4 className="text-[8px] xl:text-[8px] 2xl:text-[12px] flex font-bold items-center mr-2">
                        Esther Serwaa Kusi,
                        <p className="text-[8px] xl:text-[8px] 2xl:text-[12px]">
                          Fashion Designer CEO
                        </p>
                      </h4>
                    </div>

                    <div className="flex items-center">
                      <img
                        src={star}
                        alt="stars"
                        className="w-3 2xl:w-5 mr-1"
                      />
                      <h5 className="text-[]">4.3</h5>
                    </div>
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
