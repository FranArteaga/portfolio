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
    <section className='h-[100vh] flex pt-20'>

      <section className='w-[50%] grid place-self-center'>
        <img src="./coding.png" className='w-[70%]  ' />
      </section>

      <section className='w-[50%] grid place-self-center'>
        <h2 className=' text-[2em] font-sm'>
          Skills and knowledge
        </h2>
        <p>
          FullStack Developer open to work with new technologies
        </p>
        <ul className='text-[4rem] py-8 grid grid-cols-4 gap-4 place-content-around '>
          <li>
            <BiLogoHtml5 />
          </li>
          <li>
            <BiLogoCss3 />
          </li>
          <li>
            <DiSass />
          </li>
          <li>
            <BiLogoJavascript />
          </li>
          <li>
            <FaBootstrap />
          </li>
          <li>
            <BiLogoTailwindCss />
          </li>
          <li>
            <BiLogoReact />
          </li>
          <li>
            <SiNextdotjs />
          </li>
          <li>
            <BiLogoNodejs />
          </li>
          <li>
            <BiLogoMongodb />
          </li>
          <li>
            <BiLogoGithub />
          </li>
        </ul>
        <p>Experience with building responsive web applications</p>
        <p>Experience with building responsive web applications</p>
      </section>

    </section>

  )
}

