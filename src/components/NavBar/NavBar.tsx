import React, { useEffect, useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaMoon } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import useDarkMode from '~/useDarkMode'

const NavBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isDarkMode, toggleDarkMode] = useDarkMode()
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <nav className='flex items-center'>
      <div className='flex items-center'>
        <div className='text-20 font-bold mr-2'>NerdDog</div>
        {isDarkMode ? (
          <BsSunFill
            size={'24px'}
            color='#e9c46a'
            className='cursor-pointer'
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={'24px'}
            color='#e9c46a'
            className='cursor-pointer'
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className='ml-auto text-16 font-semibold'>
        {openMenu ? (
          <MdOutlineClose size={'24px'} className='cursor-pointer sm:hidden' onClick={handleMenu} />
        ) : (
          <HiOutlineMenu
            size={'24px'}
            className='cursor-pointer sm:hidden'
            id='top-menu-toggle-icon'
            onClick={handleMenu}
          />
        )}
        {openMenu && (
          <div className='absolute right-8 bg-white p-8 text-black text-center text-13 flex items-center'>
            <li className='cursor-pointer'>Feature</li>
            <li className='cursor-pointer'>Menu</li>
            <li className='cursor-pointer'>Out story</li>
            <li className='cursor-pointer'>Contact</li>
          </div>
        )}
        <div className='hidden sm:flex sm:gap-10 right-8 text-center' id='top-menu'>
          <li className='menu-item'>Feature</li>
          <li className='menu-item'>Menu</li>
          <li className='menu-item'>Out story</li>
          <li className='menu-item ml-28'>Contact</li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
