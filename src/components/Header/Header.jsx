import React, {useState} from 'react';
import logo from '../../assets/logosvg.svg';
import {BsChevronDown} from 'react-icons/bs'
import {AiOutlineBars} from 'react-icons/ai';
import './header.scss';


const Header = () => {
  const [headerbg, setHeaderbg] = useState(false);

  const headerbackground = () => {
    if(window.scrollY >= 90) {
      setHeaderbg(true)
    }
    else{
      setHeaderbg(false)
    }
  }

  window.addEventListener('scroll',headerbackground)

  return (
    <div className={headerbg ? 'flex items-center w-full justify-between py-4 fixed left-0 px-4 md:px-14 lg:px-28 z-50 header-bg':'flex items-center w-full justify-between py-4 fixed left-0 px-4 md:px-14 lg:px-28 z-50'}>
      <img src={logo} alt="logo" className='w-16' />
      <AiOutlineBars className='text-[#10B981] block lg:hidden'/>
        <ul className='list-none lg:flex hidden'>       
        <li className='mx-8 border py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white'>About Us</li>
        <li className='mx-8 border py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white'>Shop</li>
        <li className='mx-8 border py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] bg-white/10 capitalize text-white flex items-center'>Locations <BsChevronDown className='ml-2'/></li>
        <li className='last:mx-0 py-1  px-2 rounded-2xl text-sm font-semibold font-["Lexend"] capitalize ' style={{background:"#d1fae5", color:"#047857"}}>Account !</li>
      </ul>
    </div>
  );
};

export default Header;
