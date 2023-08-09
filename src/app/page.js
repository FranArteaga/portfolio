'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import HeaderInfo from '@/components/HeaderInfo'
import { Poppins } from '@next/font/google'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
export default function Home() {

  return (
    <>
      <main className={poppins.className}>
        <Navbar />
        <div className='py-16 md:pt-0 md:px-16 px-8'>
          <HeaderInfo />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  )
}
