import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../utils/ContextApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Home = () => {

  const {globalQuery}=useContext(Context)

  const navigate=useNavigate();


  const searchQueryHandler=()=>{
   if(globalQuery.length>0){
     navigate(`/${globalQuery}/${1}`)
   }
  }


  return (
    <div className="flex h-[100vh] flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img
            src={Logo}
            className="w-[172px] md:w-[272px] mb-8"
            alt="google logo"
          />
          <SearchInput />
          <div className="flex gap-1 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2" onClick={searchQueryHandler} >
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2" onClick={searchQueryHandler}>
              I'm Feeling lucky
            </button>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
