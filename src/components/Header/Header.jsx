import React, {useState} from 'react';
import logo from '../../assets/logosvg.svg';
import {BsChevronDown} from 'react-icons/bs'
import {AiOutlineBars} from 'react-icons/ai';
import { IoClose } from "react-icons/io5";
import './header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  const [headerbg, setHeaderbg] = useState(false);
  const [menu, setMenu] = useState(false);

  const headerbackground = () => {
    if(window.scrollY >= 90) {
      setHeaderbg(true)
    }
    else{
      setHeaderbg(false)
    }
  }

  const menubg = {
    background: "linear-gradient(to left top, rgba(130, 187, 255, 0.2), rgba(0, 211, 255, 0.2), rgba(0, 230, 228, 0.2), rgba(0, 239, 145, 0.2), rgba(168, 235, 18, 0.2))",
    backgroundColor: "rgba(0, 0, 0)"
  }

  const extendedmenubg = {
    background: "linear-gradient(to left top, rgba(130, 187, 255, 0.2), rgba(0, 211, 255, 0.2), rgba(0, 230, 228, 0.2), rgba(0, 239, 145, 0.2), rgba(168, 235, 18, 0.2))",
    backgroundColor: "rgba(0, 0, 0,.5)",
   
  }

  window.addEventListener('scroll',headerbackground)

  


  return (
    <div className={headerbg ? 'flex items-center w-full justify-between py-4 fixed left-0 px-4 md:px-14 lg:px-28 z-10 header-bg':'flex items-center w-full justify-between py-4 fixed left-0 px-4 md:px-14 lg:px-28 z-10'}>
      <img src={logo} alt="logo" className='w-16' />
      <AiOutlineBars className='text-[#10B981] block lg:hidden' onClick={()=>{setMenu(true)}}/>
        <ul className='list-none lg:flex hidden'>       
        <li className='mx-8 border py-1 px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white'>About Us</li>
        <Link to="" className='mx-8 border py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white'>Shop</Link>
        <li className='mx-8 border py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white flex items-center'>Locations <BsChevronDown className='ml-2'/></li>
        <li className='last:mx-0 py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] capitalize ' style={{background:"#d1fae5", color:"#047857"}}>Account !</li>
      </ul>

     { menu ? <div className="fixed backdrop-blur-lg z-20 lg:hidden  inset-0" style={extendedmenubg}>
      <div className="fixed w-[90%] h-[90%] top-1/2 left-1/2 transform-translate-[-50%, -50%] translate-x-[-50%] translate-y-[-50%] rounded-md transition-all ease-in  duration-500" style={menubg}>
      <IoClose className=' absolute text-white right-2 top-2 text-xl'onClick={()=>{setMenu(false)}} />
      <ul className='list-none flex flex-col justify-center  mt-16'>       
        <li className='mx-8 my-4 text-center  py-1 px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white'>About Us</li>
        <li className='mx-8 my-4 text-center  py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white'>Shop</li>
        <li className='mx-8 my-4 text-center  py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white '>Locations </li>
        <li className='last:mx-8 my-4 text-center  py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] capitalize ' style={{background:"#d1fae5", color:"#047857"}}>Account !</li>
      </ul>
      </div>
    
    </div> : "" }
    </div>
  );
};

export default Header;
