'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import HeaderInfo from '@/components/HeaderInfo'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})
export default function Home() {

  return (
    <>
      <main className={poppins.className}>
        <Navbar />
        <HeaderInfo />
      </main>
    </>
  )
}
