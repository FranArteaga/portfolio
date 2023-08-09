import React from 'react'
import { GrLocation } from 'react-icons/gr'
import ContactCard from './ContactCard'

export default function ContactSection() {
    return (
        <section id="section-Contact" className=' pt-16 sm:pt-20 md:pt-10'>
            <h2 className='text-[2em] font-bold py-6'>Contact Me</h2>
            <h4 className='text-xl text-gray-600 leading-loose pb-8'> Currently looking for opportunities. Feel free to send me a message! </h4>
            <div className='md:flex gap-8'>

                <ContactCard
                    cardIcon="location"
                    cardTitle="Location"
                    cardInfo="Nayarit, México"
                />
                <ContactCard
                    cardIcon="email"
                    cardTitle="Email"
                />
                <ContactCard
                    cardIcon="linkedin"
                    cardTitle="Linkedin"
                />

            </div>
        </section>
    )
}
