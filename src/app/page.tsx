import { title } from 'process'
import {BiHomeCircle,BiUser} from 'react-icons/bi'
import {BsBell,BsBookmark} from 'react-icons/Bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'
import React from 'react'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
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
    <div className='w-full h-full flex justify-centre items-centre relative'>
      <div className='max-w-screen-lg w-full h-full h-flex relative'>
        {/*left sidebar for navigation/header */}
          <section className='fixed w-72 flex flex-col'>
            {
              NAVIGATION_ITEMS.map((item)=>(
                <Link className='bg-white/50 flex item-centre justify-centre space-x-2 rounded-3xl p-4' href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon/>
                  </div>
                  <div>
                    {
                      item.title
                    }
                  </div>
                </Link>
              ))
            }
          </section>
      <main>Home-timeline</main>
      <section>right-trending</section>
      </div>
    </div>

  )
}

export default page