import { title } from 'process'
import {BiHomeCircle,BiUser} from 'react-icons/bi'
import {BsBell,BsBookmark, BsThreeDots} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import React from 'react'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
  {
    title:'Twitter',
    icon: RiTwitterXLine
  },
  {
    title:'Home',
    icon: BiHomeCircle
  },
  {
    title:'Explore',
    icon: HiOutlineHashtag
  },
  {
    title:'Notifications',
    icon: BsBell
  },
  {
    title:'Messages',
    icon: HiEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }


]

const LeftSidebar = () => {
  return (
    <div>
         <section className="w-full sticky top-0 xl:flex flex-col items-stretch h-screen hidden">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
            href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon/>
                  </div>
                  <div>
                    {item.title !== "Twitter" && <div>{item.title }</div>}
                  </div>
                </Link>
              ))
            }
            <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">
              Pravin
            </div>
            <div className="">@45beepy</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  </div>
  )
};

export default LeftSidebar