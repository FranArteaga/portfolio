import React from 'react'
import CardForProject from './CardForProject'

export default function ProjectsSection() {
    return (
        <>
            <section  id="section-Project" className='h-[100vh] pt-20 md:pt-0'>
                <h2 className='text-[2em] py-8'>Projects and experience</h2>
                <CardForProject />
            </section>
        </>
    )
}
