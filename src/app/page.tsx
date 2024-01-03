import { title } from 'process'
import {BiHomeCircle,BiUser} from 'react-icons/bi'
import {BsBell,BsBookmark} from 'react-icons/Bs'
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
          <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
            {
              NAVIGATION_ITEMS.map((item)=>(
                <Link className='hover:bg-white/10 text-2xl transition duration-200 flex item-center justify-start w-fit space-x-4 rounded-3xl py-2 px-5' 
                href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon/>
                  </div>
                  <div>
                    {item.title !== "Twitter" && item.title }
                  </div>
                </Link>
              ))
            }
          </section>
        {/*<main>Home-timeline</main>
      <section>right-trending</section>*/}
      </div>
    </div>

  )
}

export default page