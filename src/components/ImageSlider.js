import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

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
    return (
        <div className='max-w-[1080px] h-[720px] w-full m-auto py-16 px-4 relative'>
            <div style={{ backgroundImage: `url(${slides[2].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

                <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 textwhite cursor-pointer'>
                    <BsChevronCompactLeft />
                </div>
                <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 textwhite cursor-pointer'>
                    <BsChevronCompactRight />
                </div>

            </div>
        </div>
    )
}
