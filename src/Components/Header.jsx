import React, { useContext, useState } from "react";
import { Context } from "../Context/ContextAPI";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Loder from "../Shared/Loder";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

import  ytlogo  from "../images/yt-logo.png";
import  mobileLogo  from "../images/yt-logo-mobile.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loding, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
    
  };

  const mobileMenuToggel = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className=" sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loding && <Loder />}

      <div className=" flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggel}
          >
            {mobileMenu ? (
              <CgClose className=" text-white text-xl" />
            ) : (
              <SlMenu className=" text-white text-xl" />
            )}
          </div>
        )}
        <NavLink to="/" className='flex h-5 items-center'>
        <img
          src={ytlogo}
          alt="youtube"
          className=" h-full hidden dark:md:block"
        />
        <img src={mobileLogo} alt="youtube" className=" h-full md:hidden" />
        </NavLink>
      </div>
      <div className=" group flex items-center">
          <div className=" flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
              <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                <IoIosSearch className=" text-white text-xl"/>
              </div>
              <input 
              type="text" 
              className=" bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              onChange={(e)=>setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search"
              value={searchQuery}
              />
          </div>
              <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
              onClick={() => searchQueryHandler("searchButton")}
              >
              <IoIosSearch className=" text-white text-xl"/>
              </button>

      </div>
      <div className="flex items-center">
        <div className=" hidden md:flex">

          <div className="flex justify-center items-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className=" text-white text-xl cursor-pointer"/>
          </div>

          <div className="flex justify-center items-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className=" text-white text-xl cursor-pointer"/>
          </div>

          
         
        </div>
        <div className="flex h-8 w-8 overflow-hidden md:ml-3 mt-1 rounded-full">
           <img src="https://xsgames.co/randomusers/assets/avatars/male/50.jpg" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Header;
