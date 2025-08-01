import React from 'react';
import Logo from '../assets/logo.png';
import Button from '../components/Button';


const Header = () => {
  return (
    <>
      <section className="bg-[#F3FBF0] py-[30px]">
        <div className="max-w-[1320px] m-auto">
            <div className="flex justify-between items-center">
            <div className="">
                <img src={Logo} alt="aa" />
            </div>
            <div className="">
                <ul className="flex gap-6">
                    <li className="text-[#29313D] text-[18px] font-semibold"><a href="#">Home</a></li>
                    <li className="text-[#29313D] text-[18px] font-semibold"><a href="#">About</a></li>
                    <li className="text-[#29313D] text-[18px] font-semibold"><a href="#">Service</a></li>
                    <li className="text-[#29313D] text-[18px] font-semibold"><a href="#">Portfolio</a></li>
                    <li className="text-[#29313D] text-[18px] font-semibold"><a href="#">Price</a></li>
                    <li className="text-[#29313D] text-[18px] font-semibold"><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="">
                <Button/>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Header
