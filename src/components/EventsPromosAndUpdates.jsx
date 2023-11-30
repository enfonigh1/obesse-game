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
import { TfiAnnouncement } from "react-icons/tfi";
import { BiTimeFive } from "react-icons/bi";
import blogbg from "../assets/blogeventsbg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaEye } from "react-icons/fa";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IoClose } from "react-icons/io5";
import logo from '../assets/logosvg.svg';

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
        "Console gaming has become a widespread form of entertainment, offering immersive experiences with stunning graphics and realistic gameplay. Players can enjoy a diverse range of genres, from action-packed adventures to strategic simulations, all from the comfort of their living rooms.NBA 2K23 - The Ultimate Basketball Gaming Experience Welcome to the next level of virtual basketball excitement! NBA 2K23, the latest installment in the acclaimed NBA 2K series, takes the gaming experience to new heights with cutting-edge graphics, realistic gameplay, and a host of innovative features that capture the essence of professional basketball.**Stunning Visuals:** Immerse yourself in the game with lifelike player models, detailed arenas, and jaw-dropping graphics. NBA 2K23 pushes the boundaries of realism, making you feel like you're right on the court.Enhanced Gameplay:** Experience the thrill of dribbling, shooting, and dunking with enhanced controls and fluid animations. The improved AI ensures that every game is a unique challenge, keeping you on your toes throughout the season.MyCareer Mode:** Create your own basketball legend in the MyCareer mode. Navigate through the challenges of a rising NBA star, make crucial decisions, and build your legacy both on and off the court.MyTeam:** Construct your dream team by collecting player cards, completing challenges, and competing in dynamic game modes. Take on other players online and prove that your team is the best in the world.Realistic Commentary:** Enjoy the dynamic commentary that reflects the ebb and flow of each game. The announcers provide insightful analysis, creating an authentic broadcast experience.*Innovative Game Modes:** From street basketball to unique challenges, NBA 2K23 offers a variety of game modes to keep you entertained. Try out different styles of play and discover new aspects of the basketball world.Online Multiplayer:** Compete against players from around the globe in online multiplayer modes. Test your skills, climb the leaderboards, and become a virtual basketball legend.Whether you're a seasoned NBA 2K veteran or a newcomer to the series, NBA 2K23 promises an unforgettable gaming experience. Get ready to lace up your virtual sneakers, hit the court, and embark on a journey to basketball greatness!",
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
        <div className=" flex justify-center items-center">
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
                      <TfiAnnouncement className="mr-2 text-slate-700 2xl:text-[16px] text-[12px] md:text-[14px" />
                      <h2 className="text-slate-700 text-[10px] md:text-[12px] tracking-wide text-center md:text-left  font-['Lexend'] leading-loose md:leading-7 2xl:text-[14px]">
                        {title}
                      </h2>
                    </div>

                    <p className="texte text-[#1B1C57] text-[7px] md:text-[8px] xl:text-[10px] font-medium no-scrollbar font-['Lexend'] capitalize leading-normal mb-2 overflow-y-auto h-14 md:h-16 break-words md:break-normal">
                      <h3 className="text-[8px] md:text-[10px] tracking-tight mb-2 whitespace-nowrap xl:text-[12px]">{heading}</h3>
                      {text}
                    </p>


                  <div className="flex justify-end">
                      <FaEye
                        className="cursor-pointer text-gray-500 opacity-50"
                        onClick={() => handleZoom({ id, img, title, heading,subheading, text, date, time })}
                      />
                      </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Modal isOpen={modal} toggle={toggle} className="modal fixed">
          <div className=" absolute top-2 right-3 cursor-pointer text-[#10B981]" onClick={toggle}>
            <IoClose size={30} />
          </div>
          <div className=" bg-white fixed inset-[15%] rounded-md p-10  border-1 border-[#144435] text-black flex flex-col ">
            <ModalHeader toggle={toggle} className="font-bold text-center mt-0 md:mt-4 font-['Lexend'] text-[12px] -mb-5 md:text-[14px] lg:text-[18px]">{zoomedContent?.title}</ModalHeader>
            <ModalBody className="text-blac">
              <img className="w-10 h-10 absolute top-0 border-white border-2 left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] lg:w-20 lg:h-20  block mx-auto rounded-full bg-center" src={zoomedContent?.img} alt="" />
              <p className="font-semibold text-center font-['Lexend'] text-12px] md:text-[14px] lg:text-[18px]">{zoomedContent?.subheading}</p>
              <p className="text-[12px] md:text-[14px] leading-7 tracking-wide font-medium font-['Lexend'] mt-4 text-ellipsis h-[40vh] overflow-y-auto md:h-[60vh] lg:h-[40vh] xl:h-[38vh] no-scrollbar">{zoomedContent?.text}</p>
            </ModalBody>
            <ModalFooter className="mt-2 absolute right-0 -bottom-8">
              {/* <Button color="secondary" onClick={toggle}>
                Close
              </Button> */}
            
              {/* <small className="block text-[10px] text-right">{zoomedContent?.date}</small>
              <small className="block text-[10px] text-right">{zoomedContent?.time}</small> */}
            </ModalFooter>
          </div>
        </Modal>

        <div className="md:ml-20 mt-10 md:mt:0">
          <img className="bg-cover rounded-md" src={BigEvent} alt="" />
          <p
            className="text-[#1B1C57] text-[14px] text-center md:text-left md:text-[16px] font-medium font-['Lexend'] flex items-center capitalize
          mt-2"
          >
          Obese Game Lounge Experience
          </p>
          <p className="md:text-[10px] text-[14px] h-16 overflow-auto no-scrollbar mt-2 font-normal font-['Lexend'] text-[#626687] major ">
          At Obese Game Lounge, we're not just a venue; we're a community of gaming enthusiasts, sports fanatics, and style aficionados. Come join the fun – where every visit is a celebration of entertainment, camaraderie, and self-care. Your adventure begins here! 🚀🎉 #ObeseGameLounge #EntertainmentHub
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col">
        <h2 className="text-[#1B1C57] text-[14px] text-center self-center md:text-left md:text-[16px] font-medium font-['Lexend'] capitalize
          mt-2">Obese Game Lounge Experience</h2>
        <p className="md:text-[10px] text-[14px]  mt-2 font-normal font-['Lexend'] text-[#626687] text-center">At Obese Game Lounge, we're not just a venue; we're a community of gaming enthusiasts, sports fanatics, and style aficionados. Come join the fun – where every visit is a celebration of entertainment, camaraderie, and self-care. Your adventure begins here! 🚀🎉 #ObeseGameLounge #EntertainmentHub</p>
      </div> */}
    </div>
  );
};

export default EventsPromosAndUpdates;
