import React, { useState } from "react";
import BigEvent from "../assets/reviewimg1.png";
import FirstEvent from "../assets/pesslideevent.png";
import SecondEvent from "../assets/basketball.png";
import ThirdEvent from "../assets/nfsslideevent.png";
import FourthEvent from "../assets/mortalkombatalievent.png";
import FifthEvent from "../assets/supermanslideevent.png";
import SixthEvent from "../assets/spidermanslideevent.png";
import SeventhEvent from "../assets/gtavslideevent.png";
import EighthEvent from "../assets/juvenslideevent.png";
import { RxAvatar } from "react-icons/rx";
import { BiTimeFive } from "react-icons/bi";
import blogbg from "../assets/blogeventsbg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaEye } from "react-icons/fa";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IoClose } from "react-icons/io5";

const EventsPromosAndUpdates = () => {
  const blogUrl = blogbg;

  const eventsInfo = [
    {
      id: 1,
      img: FirstEvent,
      title: "Announcement",
      heading: "Get Ready for the upcoming gaming competition",
      subheading:"Pro Evolution Soccer 2023 Gaming Event",
      text:
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.",
      date:"23-11-23",
        time: "  4 min read | READ",
    },
    {
      id: 2,
      img: SecondEvent,
      title: "Announcement",
      heading: "Get Ready for the upcoming gaming competition",
      subheading:"NBA2K23 Basketball Gaming Event",
      text:
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.",
      date:"23-11-23",
        time: "  4 min read | READ",
    },
    {
      id: 3,
      img: ThirdEvent,
      title: "Announcement",
      heading: "Get Ready for the upcoming gaming competition",
      subheading:"Need for Speed Unbound Gaming Event",
      text:
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.",
      date:"23-11-23",
        time: "  4 min read | READ",
    },
    {
      id: 4,
      img: FourthEvent,
      title: "Announcement",
      heading: "Get Ready for the upcoming gaming competition",
      subheading:"Mortal Kombat 11 Gaming Event",
      text:
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.",
      date:"23-11-23",
        time: "  4 min read | READ",
    },
    {
      id: 5,
      img: FifthEvent,
      title: "Announcement",
      heading: "Get Ready for the upcoming gaming competition",
      subheading:"Superman Unrestricted Gaming Event",
      text:
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.",
      date:"23-11-23",
        time: "  4 min read | READ",
    },
    {
      id: 6,
      img: SixthEvent,
      title: "Announcement",
      heading: "Get Ready for the upcoming gaming competition",
      subheading:"Spiderman 2 2023 Gaming Event",
      text:
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.",
      date:"23-11-23",
        time: "  4 min read | READ",
    },
    {
      id: 7,
      img: SeventhEvent,
      title: "Announcement",
      heading: "Get Ready for the upcoming gaming competition",
      subheading:"Grand Theft Auto V Gaming Event",
      text:
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.",
      date:"23-11-23",
        time: "  4 min read | READ",
    },
    {
      id: 8,
      img: EighthEvent,
      title: "Announcement",
      heading: "Get Ready for the upcoming gaming competition",
      subheading:"Fifa 2023 Gaming Event",
      text:
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.",
      date:"23-11-23",
        time: "  4 min read | READ",
    },
  ];

  const [modal, setModal] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedContent, setZoomedContent] = useState(null);

  const handleZoom = (contents) => {
    setIsZoomed(!isZoomed);
    setZoomedContent(contents);
    toggle();
  };

  const toggle = () => setModal(!modal);

  return (
    <div
      className="px-4 md:px-8 lg:px-28 -mt-20 mb-20"
      style={{
        background: `url(${blogUrl})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center ">
        <hr className="bg-[#F59E0B] w-10 justify-self-center absolute  border-[#F59E0B]  " />
        <h2 className="text-center mt-1 mb-5 text-[#F59E0B] text-sm font-medium font-['Lexend'] capitalize">
          Keep Up with us
        </h2>
      </div>
      <p className="text-center text-[#1B1C57] text-[16px] font-semibold font-['Lexend'] capitalize">
        Blogs, Events, Promos And Update
      </p>
      <button className="text-white mb-4 md:mb-0 block my text-[10px] mx-auto mt-5 bg-[#10B981] rounded-2xl py-1.5 px-3 text-[6px]emibold font-['Lexend']">
        STAY UPDATED
      </button>

      <div className="expand"></div>

      <div className="grid md:grid-cols-2 mt-10 md:mt-0">
        <div className="lg:mr-28 flex justify-center items-center">
          <Swiper
            spaceBetween={20}
            direction={"vertical"}
            slidesPerView={3}
            loop={true}
            pauseOnMouseEnter={true}
            clickable={(swiper, event) => {
              console.log("clickable");
            }}
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
            {eventsInfo.map(({ id, img, title, heading,subheading, text, date, time }, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center mb-5 relative">
                  <img
                    className="w-24 h-24 bg-cover mr-5 rounded-md"
                    src={img}
                    alt=""
                  />
                  <div className="">
                    <div className="flex items-center cursor-pointer">
                      <RxAvatar className="mr-2" />
                      <h2 className="text-slate-700 text-[14px] md:text-[16px] font-bold  text-center md:text-left  font-['Lexend'] leading-loose md:leading-7">
                        {title}
                      </h2>
                    </div>

                    <p className="texte text-[#1B1C57] text-[12px] md:text-[14px] xl:text-[12px] font-medium no-scrollbar font-['Lexend'] capitalize leading-normal mb-2 overflow-y-auto h-14 md:h-16 break-words md:break-normal">
                      <h3 className="">{heading}</h3>
                      {text}
                    </p>

                    <div className="flex items-center cursor-pointer mb-2">
                      <BiTimeFive className="mr-2 text-[8px]" />
                      <p className=" flex-1 text-[10px] md:text-[14px] text-neutral-400 font-normal font-['Lexend']">
                        {time}
                      </p>
                      <FaEye
                        className="cursor-pointer"
                        onClick={() => handleZoom({ id, img, title, heading,subheading, text, date, time })}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Modal isOpen={modal} toggle={toggle} className="modal">
          <div className=" absolute top-2 right-3 cursor-pointer text-[#10B981]" onClick={toggle}>
            <IoClose size={30} />
          </div>
          <div className=" bg-white fixed inset-[8%] rounded-md p-4 bg-opacity-60 text-white flex flex-col ">
            <ModalHeader toggle={toggle} className="font-bold text-center mt-0 md:mt-4 font-['Lexend'] text-12px] md:text-[25px] lg:text-[30px]">{zoomedContent?.title}</ModalHeader>
            <ModalBody className="text-white">
              <img className="w-20 h-20 lg:w-40 lg:h-40 mb-4 block mx-auto rounded-full bg-center" src={zoomedContent?.img} alt="" />
              <p className="font-semibold text-center mt-0 md:mt-4 font-['Lexend'] text-12px] md:text-[25px] lg:text-[30px]">{zoomedContent?.subheading}</p>
              <p className="text-[12px]  md:text-[18px] leading-7 tracking-wide font-medium font-['Lexend'] mt-5 text-ellipsis overflow-y-auto h-[28vh] md:h-auto">{zoomedContent?.text}</p>
            </ModalBody>
            <ModalFooter className="mt-5">
              {/* <Button color="secondary" onClick={toggle}>
                Close
              </Button> */}
            
              <small className="block text-[10px] text-right">{zoomedContent?.date}</small>
              <small className="block text-[10px] text-right">{zoomedContent?.time}</small>
            </ModalFooter>
          </div>
        </Modal>

        <div className="md:ml-20 mt-10 md:mt:0">
          <img className="bg-cover rounded-md" src={BigEvent} alt="" />
          <div className="flex items-center cursor-pointer justify-center md:justify-start mt-5">
            <RxAvatar className="mr-2" />
            <p className=" text-[#3C4563] text-sm font-nogmal font-['Lexend'] leading-loose md:leading-snug">
              Cameron Williamson
            </p>
          </div>
          <p
            className="text-[#1B1C57] text-[14px] text-center md:text-left md:text-[16px] font-medium font-['Lexend'] capitalize
          mt-2"
          >
            12 Things to know before buying a house
          </p>
          <p className="md:text-[10px] text-[14px]  mt-2 font-normal font-['Lexend'] text-[#626687] ">
            Want to buy a house but are unsure about what we should know, here I
            will try to explain what we should know and check when want to buy a
            house
          </p>

          <div className="flex items-center cursor-pointer justify-center md:justify-start mt-2 text-[10px] md:text-[8px]">
            <BiTimeFive className="mr-1 text-[#888B97] " />
            <p className="text-[#888B97] font-normal font-['Lexend'] text-[10px] md:text-[6px]">
              8 min read | READ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPromosAndUpdates;
