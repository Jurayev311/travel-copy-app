"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from '../../public/assets/logo.svg'
import logo2 from '../../public/assets/logo2.svg'
import lang from '../../public/assets/lang.svg'
import { LINKS } from '../../public/static'
import Link from 'next/link'
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const [scroll, setScroll] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 
      ${pathname === "/discover"
        ? (scroll ? "bg-slate-400/50 backdrop-blur-xl text-white" : "bg-white text-black")
        : (scroll ? "bg-slate-400/50 backdrop-blur-xl text-white" : "bg-transparent text-white")
      }`}>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between h-[60px]'>
          <Link href={'/'}>
            <Image
              src={pathname === "/discover" && !scroll ? logo2 : logo}
              alt='Logo'
              width={148}
              height={60}
              className={`${pathname === "/discover" && !scroll ? "filter brightness-0" : ""}`}
            />
          </Link>

          <ul className='hidden md:flex items-center gap-10 text-[16px] font-bold'>
            {LINKS?.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span className={`transition-all duration-300
                      ${pathname === item.path ? "font-extrabold" : ""}`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <Image src={lang} alt="Language" className="w-5 h-5 rounded-full object-cover" />
            <select className="bg-transparent appearance-none outline-none text-[16px] font-bold">
              <option value="ID" className="text-black">ID</option>
              <option value="EN" className="text-black">EN</option>
              <option value="RU" className="text-black">RU</option>
            </select>
            <FaChevronDown className='text-[15px]' />
          </div>

          <button
            className="md:hidden text-[24px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {mobileMenuOpen && (
            <div className='absolute top-[60px] left-0 w-full bg-slate-400/80 text-white flex flex-col items-center gap-4 py-4 text-[16px] font-bold md:hidden'>
              <ul className='w-full flex flex-col items-center gap-4'>
                {LINKS?.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} onClick={() => setMobileMenuOpen(false)}>
                      <span className={`transition-all duration-300
                          ${pathname === item.path ? "font-extrabold" : ""}`}>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <Image src={lang} alt="Language" className="w-5 h-5 rounded-full object-cover" />
                <select className="bg-transparent appearance-none outline-none text-[16px] font-bold">
                  <option value="ID" className="text-black">ID</option>
                  <option value="EN" className="text-black">EN</option>
                  <option value="RU" className="text-black">RU</option>
                </select>
                <FaChevronDown className='text-[15px]' />
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header