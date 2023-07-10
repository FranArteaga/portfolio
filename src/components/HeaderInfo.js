import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export default function HeaderInfo() {
    return (
        <header className='w-full md:flex md:pt-4 md:px-10'>
            <section className='md:w-[50%] p-6' >
                <h1 className='text-[2.5em] font-bold py-1'>Francisco Arteaga</h1>
                <h4 className='text-2xl font-medium'>FullStack Developer</h4>
                <p className='text-xl py-4 text-gray-600'>Proactive and passionate web developer.
                    Experienced in building Web applications with
                    JavaScript / Reactjs / Nodejs / Nextjs / Bootstrap / TailwindCSS </p>
                <div className='md:w-[50%] py-4 flex justify-around items-center '>
                    <BsGithub className='text-[2em]'/>
                    <BsLinkedin className='text-[2em]'/>
                    <button className='text-white text-sm font-bold p-[.45em] bg-black  rounded-lg'>
                        My Resume
                    </button>
                </div>
            </section>

            <section className='md:w-[50%] grid'>
                <img src="./office.png" className='md:w-[75%] place-self-center' />
            </section>

        </header>
    )
}
