"use-client"
import React from 'react'
import { Navbar } from './navbar'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/image/logo.png'
import SwitchMode from './switch-mode'
import { MobileMenu } from './mobile-menu'
import LanguageSelectClientOnly from './language-select.client'

function Header() {
  return (
    <header className='border-b backdrop-blur-xl bg-white/30 dark:bg-gray-900/30
        shadow-lg" fixed z-99 w-full '>
      <nav className='flex container mx-auto px-[20px] items-center justify-between'>
        <Link href={'/'} className='py-2 flex  items-center text-[20px] gap-2 font-semibold'>
          <Image src={Logo} className='w-[40px]' alt='logo' />
          InnoHub
        </Link>
       <div className='hidden lg:block'>
         <Navbar />
       </div>
        <div className='flex items-center gap-3'>
          <div className=' hidden  lg:flex items-center gap-3 '>
            <SwitchMode />
          <LanguageSelectClientOnly />
          </div>
          <div className='block lg:hidden'>
            <MobileMenu/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header