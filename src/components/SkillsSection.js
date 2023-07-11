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

      <section className='md:w-[50%] grid '>
        <img src="./coding.png" className='w-[70%] place-self-center ' />
      </section>

      <section className='md:w-[50%] grid place-self-center'>
        <div>
          <h2 className=' text-[2em] font-sm'>
            Skills and knowledge
          </h2>
          <p>
            FullStack Developer open to work with new technologies
          </p>
          <ul className='text-[4rem] py-8 grid grid-cols-4 gap-4 place-items-center text-center '>
            <li>
              <BiLogoHtml5 />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <BiLogoCss3 />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <DiSass />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <FaBootstrap />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <BiLogoJavascript />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <BiLogoReact />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <SiNextdotjs />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <BiLogoTailwindCss />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <BiLogoNodejs />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <BiLogoMongodb />
              <p className='text-sm'>a</p>
            </li>
            <li>
              <BiLogoGithub />
              <p className='text-sm'>a</p>
            </li>
          </ul>
          <p>Experience with building responsive web applications</p>
          <p>Experience with building responsive web applications</p>
        </div>
      </section>

    </section>

  )
}

