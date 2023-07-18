import React, { useState } from 'react'
import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'

export default function Navbar() {


  return (
    <>
      <navbar className="z-index-[1] drop-shadow-md fixed w-full text-xl bg-white p-5 md:flex md:items-center md:justify-between ">

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

      </navbar>
    </>
  )
}
