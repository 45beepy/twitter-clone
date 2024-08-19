import { FaRegComment, FaRetweet } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { HiOutlineEmojiHappy, HiOutlineCalendar } from "react-icons/hi";
import { RiImageLine, RiBarChartHorizontalLine } from "react-icons/ri";
import { MdOutlineGif } from "react-icons/md";

const MainComponent = () => {
  return (
    <main className="flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      {/* Home header */}
      <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0 z-10 border-b-[0.5px] border-gray-600">
        Home
      </h1>

      {/* Tweet compose section */}
      <div className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4">
        <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
        <div className="flex-1 flex flex-col">
          <input
            type="text"
            className="w-full bg-transparent p-2 outline-none text-lg"
            placeholder="What's happening?"
          />
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center space-x-4 text-blue-500 cursor-pointer hover:bg-blue-100 hover:bg-opacity-10 p-2 rounded-full">
              <RiImageLine  size={38} />
              <MdOutlineGif  size={38} />
              <RiBarChartHorizontalLine  size={38} />
              <HiOutlineEmojiHappy  size={38} />
              <HiOutlineCalendar  size={38} />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold rounded-full px-4 py-2">
              Tweet
            </button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col divide-y-[0.5px] divide-gray-600">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="px-4 py-6 flex space-x-4 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
            <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col space-y-2 w-full">
              {/* Tweet content */}
              <div className="text-white">
                <span className="font-semibold">User {i + 1} </span>
                <span className="text-gray-500">@username · 1h</span>
                <p className="mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt fugit id autem mollitia vero cum officia animi ipsa.
                </p>
              </div>

              {/* Tweet media (optional) */}
              <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>

              {/* Tweet actions */}
              <div className="flex justify-between text-gray-500">
                <div className="flex items-center space-x-2 group cursor-pointer group-hover:text-blue-500">
                  <FaRegComment size={20}  />
                  <span className="group-hover:text-blue-500">23</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer group-hover:text-green-500">
                  <FaRetweet size={20}  />
                  <span className="group-hover:text-green-500">10</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer group-hover:text-pink-500">
                  <AiOutlineHeart size={20}  />
                  <span className="group-hover:text-pink-500">99</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer group-hover:text-blue-500">
                  <BsUpload size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
