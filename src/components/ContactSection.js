import React from 'react'
import { GrLocation } from 'react-icons/gr'
import ContactCard from './ContactCard'

export default function ContactSection() {
    return (
        <section id="section-Contact" className='md:h-[100vh] pt-16 sm:pt-20 md:pt-0'>
            <h2 className='text-[2em] py-6'>Contact Me</h2>
            <div className='md:flex gap-8'>

                <ContactCard
                    cardIcon="location"
                    cardTitle="Location"
                    cardInfo="Nayarit, México"
                />
                <ContactCard
                    cardIcon="email"
                    cardTitle="Email"
                    cardInfo="franrtg96@gmail.com"
                />
                <ContactCard
                    cardIcon="linkedin"
                    cardTitle="Linkedin"
                    cardInfo="linkedin"
                />

            </div>
        </section>
    )
}
