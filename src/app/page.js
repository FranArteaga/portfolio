'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import HeaderInfo from '@/components/HeaderInfo'
import { Poppins } from '@next/font/google'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})
export default function Home() {

  return (
    <>
      <main className={poppins.className}>
          <Navbar />
        <div className='md:px-16 px-8'>
          <HeaderInfo />
          <SkillsSection />
          <ProjectsSection/>
        </div>
      </main>
    </>
  )
}
