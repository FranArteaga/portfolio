import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {

  let arrLinks = [
    { name: 'Skills', link: '#section-Skills' },
    { name: 'Projects', link: '#section-Project' },
    // { name: 'Hobbies', link: '/' },
    { name: 'Contact', link: '#section-Contact' },
  ]
  let [open, setOpen] = useState(false)
  return (
    <>

      <div className='z-[1] shadow-md w-full fixed'>

        <div className='flex items-center justify-between bg-white py-5 md:px-12 px-8'>

          <Link href='' onClick={()=>setOpen(!open)} className='text-xl font-semibold hover:text-indigo-600 duration-300'>
            Francisco Arteaga
          </Link>

          <div onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
            <FiMenu/>
          </div>

          <ul className={`font-medium shadow-md md:shadow-none md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-300 ease-in-out  ${open ? 'top-12 opacity-100': 'top-[-500px]' } `}>
            {
              arrLinks.map((aLink) => (
                <li key={aLink.name} className='md:ml-8 text-xl md:my-0 my-5'>
                  <Link href={aLink.link} onClick={()=>setOpen(!open)} className='hover:text-indigo-600 duration-300'>{aLink.name}</Link>
                </li>
              ))
            }
          </ul>

        </div>
      </div>
    </>
  )
}
