import React from 'react'

export default function Navbar() {
    return (
        <>
        <navbar className="text-md bg-white drop-shadow-md p-5 md:flex md:items-center md:justify-between ">
          <section className=''>
            <p>Francisco Arteaga</p>
          </section>
          <ul className="md:flex md:items-center">
            <li className='mx-4'>
              <p className='text-md hover:text-red-500 duration-500'>Skills</p>
            </li>
            <li className='mx-4'>
              <p className='text-md hover:text-red-500 duration-500'>Projects</p>
            </li>
            <li className='mx-4'>
              <p className='text-md hover:text-red-500 duration-500'>Hobbies</p>
            </li>
            <li className='mx-4'>
              <p className='text-md hover:text-red-500 duration-500'>Contact</p>
            </li>
          </ul>
        </navbar>
        </>
    )
}
