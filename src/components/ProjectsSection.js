import React from 'react'
import CardForProject from './CardForProject'

export default function ProjectsSection() {
    return (
        <>
            <section id="section-Project" className='md:h-[100vh] pt-16 sm:pt-20 md:pt-0 grid'>
                <div className='flex flex-col place-self-center'>
                    <h2 className='text-[2em] py-6'>Projects and experience</h2>
                    <CardForProject />
                </div>
            </section>
        </>
    )
}
