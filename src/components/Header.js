"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/assets/logo.svg'
import lang from '../../public/assets/lang.svg'
import { LINKS } from '../../public/static'
import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {

  const [scroll, setScroll] = useState(false)

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setScroll(window.scrollY > 50)
    }
  }

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scroll ? "bg-white/50 backdrop-blur-md text-black shadow-md" : "bg-transparent text-white"
      }`}>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between h-[60px]'>
          <div className={`${scroll ? "invert" : ""}`}>
            <Image src={logo} alt='Logo' width={148} height={60} />
          </div>


          <ul className='flex items-center gap-10 text-[16px] font-bold'>
            {
              LINKS?.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}><span>{item.name}</span></Link>
                </li>
              ))
            }
          </ul>

          <div className="relative inline-flex items-center gap-2 bg-transparent">
            <Image
              src={lang}
              alt="Indonesia Flag"
              className="w-5 h-5 rounded-full object-cover"
            />
            <select className="bg-transparent appearance-none outline-none pr-6 text-[16px] font-bold">
              <option value="ID" className="text-black">ID</option>
              <option value="EN" className="text-black">EN</option>
              <option value="RU" className="text-black">RU</option>
            </select>
            <span className="absolute right-0 pr-1 pointer-events-none"><FaChevronDown className='text-[15px]' /></span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header