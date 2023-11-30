import React from 'react';
import logo from '../assets/logosvg.svg';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {FaInstagramSquare} from 'react-icons/fa';
import {BiLogoTwitter} from 'react-icons/bi';
import footerbg from '../assets/footerbackground.png'

const Footer = () => {

  const footerUrl = footerbg
  return (
    <div className='grid md:grid-cols-2 px-4 md:px-14 lg:px-28' style={{
      backgroundImage: `url(${footerUrl}`,
      backgroundSize: "cover",
    }}>
      <div className="justify-self-center md:justify-self-center">
        <img src={logo} className='w-16 block mx-auto md:mx-auto' alt="" />
        <p className="opacity-75 text-[#3C4563] text-[12px] font-normal font-['Lexend'] text-center leading-normal">Obese Gaming Lounge(OGL)</p>
        <div className="flex justify-center md:justify-start mt-14 md:mb-20">
          <BiLogoFacebookCircle className='mr-2 text-[#3C4563] cursor-pointer font-md' />
          <FaInstagramSquare className='mr-2 text-[#3C4563] cursor-pointer font-md' />
          <BiLogoTwitter className='mr-2 text-[#3C4563] cursor-pointer font-md' />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-3 relative">
        <div className="">
        <h2 className="text-[#0E1735] mt-10 text-[12px] font-semibold font-['Lexend'] capitalize cursor-pointer">Property</h2>
        <ul className='mt-2'>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">House</li>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">Apartment</li>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">Villa</li>
        </ul>
        
        </div>

        <div className="">  
        <h2 className="text-[#0E1735] mt-10 text-[12px] font-semibold font-['Lexend'] cursor-pointer capitalize">Article</h2>
        <ul className='mt-2'>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">New Article</li>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">Popular Article</li>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">Most Read</li>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">Tips & Tricks</li>
        </ul>
        
        </div>

        <div className="">
        <h2 className="text-[#0E1735] mt-10 text-[12px] font-semibold font-['Lexend'] cursor-pointer capitalize">contact</h2>
        <ul className='mt-2'>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">Top high,near POKGAS Furniture Kumasi</li>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal font-['Lexend'] capitalize">+233 20-303-8734</li>
        <li className="text-[#888B97] block my-2 cursor-pointer 2xl:text-[14px] font-normal overflow-hidden text-ellipsis font-['Lexend'] capitalize">Obesegaminglouge@gmail.com</li>
        </ul>
        
        </div>
       
      </div>
    </div>
  )
}



export default Footer