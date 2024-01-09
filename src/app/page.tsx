import { title } from 'process'
import {BiHomeCircle,BiUser} from 'react-icons/bi'
import {BsBell,BsBookmark, BsThreeDots} from 'react-icons/Bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'
import { RiTwitterXLine } from "react-icons/ri";
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
const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full h-flex relative">
        {/*left sidebar for navigation/header */}
          <section className="fixed w-[275px] flex flex-col item-stretch h-screen">
           <div className='flex flex-col item-stretch h-full space-y-4 mt-4'>
           {
              NAVIGATION_ITEMS.map((item)=>(
                <Link className='hover:bg-white/10 text-2xl transition duration-200 flex item-center justify-start w-fit space-x-4 rounded-3xl py-2 px-5' 
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
            <button className='m-2 rounded-full bg-primary p-3 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
              Post
            </button>
           </div>
            <button className='rounded-full flex  space-x-2 m-4 p-4 bg-transparent items-center hover:bg-white/20 transition duration-200 w-full justify-between'>
              <div className='flex item-center space-x-2'>
              <div className='rounded-full bg-slate-400 w-12 h-12'></div>
              <div className='text-left text-sm'>
                <div className='font-semibold'>Pravin</div>
                <div className=''>@45beepyy</div>
              </div>
              </div>
              
              <div>
                <BsThreeDots />
              </div>
            </button>
            <div></div>
          </section>
        {/*<main>Home-timeline</main>
      <section>right-trending</section>*/}
      </div>
    </div>

  )
}

export default page