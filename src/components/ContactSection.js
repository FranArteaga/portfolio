import React from 'react'
import { GrLocation } from 'react-icons/gr'

export default function ContactSection() {
    return (
        <section id="section-Contact" className='md:h-[100vh] pt-16 sm:pt-20 md:pt-0'>
            <div className=''>
                <h2 className='text-[2em] py-6'>Contact Me</h2>
                <div className='w-[18em] py-8 bg-zinc-100 rounded-3xl shadow-xl flex'>
                    <GrLocation className='text-[3rem]' />
                    <div>
                        <p>Location</p>
                        <p>Nayarit, México</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
