import React from 'react'
import Link from 'next/link'
import { TbBrandGithub } from 'react-icons/tb'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiOutlineMail} from 'react-icons/hi'

export default function HeaderInfo() {
    const GithubLink = 'https://github.com/FranArteaga'
    const LinkedinLink = 'https://www.linkedin.com/in/cfran-arteaga/'
    const Email = 'mailto:franrtg96@gmail.com'
    return (
        <header className=' md:h-[100vh] w-full md:flex'>

            <section className='md:w-[50%] md:place-self-center' >
                <h1 className='pt-4 sm:pt-0 text-[2.5em] font-bold py-1'>Hey there, I'm Francisco</h1>
                <h4 className='text-2xl font-medium'>FullStack Developer</h4>
                <p className='text-xl py-4 text-gray-600 leading-loose'>
                    A proactive and resourceful web developer.
                    Experienced in building Web applications with
                    JavaScript / Reactjs / Nodejs / Nextjs / Bootstrap / TailwindCSS </p>
                <div className='md:w-[50%] py-4 flex justify-around items-center'>
                    <Link href={GithubLink}>
                        <TbBrandGithub className='border-2 p-2 rounded-full  text-[4em] hover:text-indigo-600 duration-500' />
                    </Link>
                    <Link href={LinkedinLink}>
                        <AiOutlineLinkedin className='border-2 p-2 rounded-full  text-[4em] hover:text-indigo-600 duration-500' />
                    </Link>
                    <Link href={Email}>
                        <HiOutlineMail className='border-2 p-2 rounded-full  text-[4em] hover:text-indigo-600 duration-500' />
                    </Link>
                    {/* <button className='text-white text-sm font-bold p-[.72em] bg-black rounded-md hover:bg-indigo-600 duration-500' >
                        <p>My Resume</p>
                    </button> */}
                </div>
            </section>

            <section className='md:w-[50%] md:place-self-center'>
                <div className=' flex justify-center pt-8 md:pt-0'>
                    <img src="./office.png" className='w-[70%]  ' />
                </div>
            </section>

        </header>
    )
}
