import { BsDot } from "react-icons/bs";
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
      <div className="max-w-screen-xl w-full h-full h-flex relative">
          <LeftSidebar />
          <MainComponent />
          <section className="fixed flex flex-col space-y-4">

          </section>
      </div>
    </div>

  )
}

export default page