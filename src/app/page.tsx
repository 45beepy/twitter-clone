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
      <div className="max-w-[80vw] h-full flex relative">
          <LeftSidebar />
          <MainComponent />
          <section
          className="w-full sticky hidden top-2 overflow-y-auto mt-2 xl:flex flex-col items-stretch h-[90vh] overflow-x-hidden px-6">
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
                className="outline-none focus:border-primary bg-transparent border w-full h-full rounded-xl py-4 pl-14 pr-4"
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