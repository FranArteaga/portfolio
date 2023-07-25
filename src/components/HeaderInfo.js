import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export default function HeaderInfo() {
    const GithubLink = 'https://github.com/FranArteaga'
    const LinkedinLink = 'https://www.linkedin.com/in/cfran-arteaga/'
    return (
        <header className='md:h-[100vh] w-full md:flex md:pt-12 '>

            <section className='md:w-[50%]' >
                <h1 className='text-[2.5em] font-bold py-1'>Francisco Arteaga</h1>
                <h4 className='text-2xl font-medium'>FullStack Developer</h4>
                <p className='text-xl py-4 text-gray-600 leading-loose'>
                    Proactive and passionate web developer.
                    Experienced in building Web applications with
                    JavaScript / Reactjs / Nodejs / Nextjs / Bootstrap / TailwindCSS </p>
                <div className='md:w-[50%] py-6 flex justify-around items-center'>
                    <Link href={GithubLink}>
                        <BsGithub className='text-[2.5em] hover:text-indigo-600 duration-500' />
                    </Link>
                    <Link href={LinkedinLink}>
                        <BsLinkedin className='text-[2.5em] hover:text-indigo-600 duration-500' />
                    </Link>
                    <button className='text-white text-sm font-bold p-[.72em] bg-black rounded-md hover:bg-indigo-600 duration-500' >
                        <p className='r'>My Resume</p>
                    </button>
                </div>
            </section>

            <section className='md:w-[50%]'>
                <div className=' flex justify-center pt-12 md:pt-0'>
                    <img src="./office.png" className='w-[70%]  ' />
                </div>
            </section>

        </header>
    )
}
