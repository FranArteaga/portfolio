import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import toknowImage1 from '../../public//images/toknow-landing.png'
import toknow2 from '../../public/images/toknow-landing.png'

export default function ImageSlider() {
    const slides = [
        {
            url:'../../images/toknow-landing.png'
        },
        {
            url: '../../images/toknow-groups1.png'
        },
        {
            url: '../../images/toknow-groups2.png'
        },
        {
            url: '../../images/toknow-announce1.png'
        },
        {
            url: '../../images/toknow-comments1.png'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }

    return (
        <div className=' relative group '>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full md:place-self-center rounded-2xl  bg-cover duration-300'>

                <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} />
                </div>
                <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} />
                </div>
            </div>


        </div>
    )
}
