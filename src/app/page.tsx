import React from "react";
import { BsSearch } from "react-icons/bs";
import Leftsidebar from "./components/Leftsidebar";
import Maincomponent from "./components/Maincomponent";
import Rightcomponent from "./components/Rightcomponent";

const RightSection = () => {
  return (
    <div className="flex w-full h-full justify-center relative items-center bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <Leftsidebar />
        <Maincomponent />
        <Rightcomponent />
      </div>
    </div>
  );
};

export default RightSection;
