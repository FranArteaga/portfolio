import React from 'react'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import ImageSlider from './ImageSlider';

export default function CardForProject() {
  return (
    <div className='md:flex bg-zinc-100 rounded-md drop-shadow-lg'>

        <section className='md:w-[55%] p-4 md:p-8 grid'>
         {/* <img src="./images/toknow-landing.png" className='rounded-md md:place-self-center drop-shadow-md'/> */}
         <ImageSlider/>
        </section>
        
        <section className='md:w-[45%] p-8 pt-2 md:p-8'>
            <h3 className='text-[1.5em] font-semibold'>Toknow</h3>
            <p className='py-2 text-[1.2em] font-medium'>School and groups management platform.</p>
            <p className='text-gray-700 leading-loose'>Create groups, add students, create teacher and
            parent accounts and link them to a group and student,
            create scholar or group announcements and allow teachers 
            and parents to see them and commentate. </p>
            <div className='pt-4 flex justify-center md:justify-end gap-8 items-end  '>
                <a href="https://github.com/to-know-g19/TOKNOW_FE" className='font-medium hover:text-indigo-600 duration-300 flex items-center gap-2'>
                    Repository
                    <AiFillGithub className='text-[2em]'/>
                </a >
                <a href="https://toknow.online/" className='font-medium hover:text-indigo-600 duration-300 flex items-center gap-2'>
                    Page
                    <BiLinkExternal className='text-[2em]'/>
                </a >
            </div>
        </section>
        
    </div>
  )
}
