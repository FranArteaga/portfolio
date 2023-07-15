import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

export default function ImageSlider() {
    const slides = [
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        },
        {
            url: "https://queretaro.tecnm.mx/wp-content/uploads/2021/11/placeholder.png"
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
        <div className='max-w-[1080px] h-[720px] w-full m-auto py-16 px-4 relative group '>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-300'>

                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} />
                </div>
            </div>

                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div 
                        key={slideIndex} 
                        onClick={() => goToSlide(slideIndex) } 
                        className='text-xl cursor-pointer'>
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>   
        </div>
    )
}
