import { BsDot, BsSearch, BsSearchHeart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import LeftSidebar from "./components/LeftSidebar"
import MainComponent from "./components/MainComponent";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] h-full flex relative border-4">
          <LeftSidebar />
          <MainComponent />
          <section
          className="w-[25%] border-4 flex flex-col items-stretch h-screen px-4">
            <div>
              <div className="relative w-full h-full">
                <label 
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center">
                  <BsSearch className="w-5 h-5 text-gray-500"/>
                </label>
                <input 
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
                className="outline-none bg-transparent border-none w-full h-full rounded-xl py-4 px-8"
                />
              </div>
            </div>
            <div></div>
            <div></div>


          </section>
      </div>
    </div>

  )
}

export default page