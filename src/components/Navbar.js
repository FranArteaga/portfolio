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
  let [open, setOpen] = useState(false)
  return (
    <>

      <div className='z-[1] mb-12 shadow-md w-full fixed'>

        <div className='flex items-center justify-between bg-white py-4 md:px-10 px-8'>

          <Link href='#' className='text-xl'>
            Francisco Arteaga
          </Link>

          <div onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
            <FiMenu/>
          </div>

          <ul className={`shadow-md md:shadow-none md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-300 ease-in-out  ${open ? 'top-12 opacity-100': 'top-[-500px]' } `}>
            {
              arrLinks.map((aLink) => (
                <li key={aLink.name} className='md:ml-8 text-xl md:my-0 my-5'>
                  <Link href={aLink.link} className='hover:text-indigo-500 duration-300'>{aLink.name}</Link>

                </li>
              ))
            }
          </ul>

        </div>
      </div>
      {/* <navbar className="z-index-[1] drop-shadow-md fixed w-full text-xl bg-white p-5 md:flex md:items-center md:justify-between ">

        <section className='px-4 flex justify-between items-center text-center'>
          <p>Francisco Arteaga</p>

          <span className='text-2xl cursor-pointer md:hidden block'>
            <FiMenu/>
          </span>

        </section>

        <ul className="md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7">
          <li className='px-4 my-6 md:my-0'>
            <Link href={"#"} className='hover:text-indigo-500 duration-300'>Skills</Link>
          </li>
          <li className='px-4 my-6 md:my-0'>
            <Link href={"#"} className='hover:text-indigo-500 duration-300'>Projects</Link>
          </li>
          <li className='px-4 my-6 md:my-0'>
            <Link href={"#"} className='hover:text-indigo-500 duration-300'>Hobbies</Link>
          </li>
          <li className='px-4 my-6 md:my-0'>
            <Link href={"#"} className='hover:text-indigo-500 duration-300'>Contact</Link>
          </li>
        </ul>

      </navbar> */}
    </>
  )
}
