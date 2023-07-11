import React from 'react'
import { BiLogoHtml5 } from 'react-icons/bi'
import { BiLogoCss3 } from 'react-icons/bi'
import { DiSass } from 'react-icons/di'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaBootstrap } from 'react-icons/fa'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import { BiLogoNodejs } from 'react-icons/bi'
import { BiLogoMongodb } from 'react-icons/bi'
import { BiLogoGithub } from 'react-icons/bi'

export default function SkillsSection() {
  return (
    <section className='h-[100vh] md:flex pt-20'>

      <section className='invisible sm:visible  md:w-[50%] md:grid '>
        <img src="./coding.png" className='md:w-[70%] md:place-self-center ' />
      </section>

      <section className='md:w-[50%] grid place-self-center'>
        <div>
          <h2 className=' text-[2em]'>
            Skills and knowledge
          </h2>
          <p className='py-2'>
            FullStack Developer specialized in FrontEnd and open to work with new technologies.
          </p>
          <ul className='text-[4rem] py-8 grid grid-cols-4 gap-4 place-items-center text-center '>
            <li className='hover:text-orange-600 duration-300'>
              <BiLogoHtml5 />
              <p className='text-sm'>Html5</p>
            </li>
            <li className='hover:text-blue-600 duration-300'>
              <BiLogoCss3 />
              <p className='text-sm'>CSS</p>
            </li>
            <li className='hover:text-pink-600 duration-300'>
              <DiSass />
              <p className='text-sm'>Sass</p>
            </li>
            <li className='hover:text-violet-700 duration-300'>
              <FaBootstrap />
              <p className='text-sm'>Bootstrap</p>
            </li>
            <li className='hover:text-amber-400 duration-300'>
              <BiLogoJavascript />
              <p className='text-sm'>JavaScript</p>
            </li>
            <li className='hover:text-cyan-400 duration-300'>
              <BiLogoReact />
              <p className='text-sm'>React</p>
            </li>
            <li  className='hover:text-zinc-700 duration-300'>
              <SiNextdotjs />
              <p className='text-sm'>Next.js</p>
            </li>
            <li className='hover:text-sky-400 duration-300'>
              <BiLogoTailwindCss  />
              <p className='text-sm'>Tailwind CSS</p>
            </li>
            <li  className='hover:text-green-400 duration-300'>
              <BiLogoNodejs />
              <p className='text-sm'>Node.js</p>
            </li>
            <li  className='hover:text-green-600 duration-300'>
              <BiLogoMongodb />
              <p className='text-sm'>MongoDB</p>
            </li>
            <li  className='hover:text-gray-400 duration-300'>
              <BiLogoGithub />
              <p className='text-sm'>GitHub</p>
            </li>
          </ul>

        </div>
      </section>

    </section>

  )
}

