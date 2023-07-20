import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {

  let arrLinks = [
    { name: 'Skills', link: '/' },
    { name: 'Projects', link: '/' },
    { name: 'Hobbies', link: '/' },
    { name: 'Contact', link: '/' },
  ]

  return (
    <>

      <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='text-xl cursor-pointer flex items-center  text-gray-800'>
            Francisco Arteaga
          </div>
          <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <FiMenu />
          </div>
          <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
            {
              arrLinks.map((aLink)=> (
                <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-5'>
                  <Link href={aLink.link} className='hover:text-indigo-500 duration-300'>{aLink.name}</Link>
                  
                </li>
              ))
            }
          </ul>
        </div>

      </div>

    </>
  )
}
