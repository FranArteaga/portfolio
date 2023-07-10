import React from 'react'

export default function SkillsSection() {
  return (
    <section className='h-[100vh] flex pt-28'>

      <section className='w-[50%] grid'>
        <img src="./coding.png" className='w-[70%] place-self-center ' />
      </section>

      <section className='w-[50%]'>
        <h2 className=' text-[2em] font-sm'>
          Skills and knowledge
        </h2>
        <p>
          FullStack Developer open to work with new technologies
        </p>
        <span className=''>
          icons
        </span>
      </section>

    </section>

  )
}

