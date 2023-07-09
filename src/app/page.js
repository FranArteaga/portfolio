'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import HeaderInfo from '@/components/HeaderInfo'
export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderInfo />
    </>
  )
}
