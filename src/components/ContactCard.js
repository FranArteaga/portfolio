import React from 'react'
import { TfiLocationPin,TfiEmail } from 'react-icons/tfi'
import { BsLinkedin} from 'react-icons/bs'
export default function ContactCard(props) {
    const { cardIcon, cardTitle, cardInfo } = props

    const iconMap = {
        location: <TfiLocationPin />,
        email: <TfiEmail/>,
        linkedin: <BsLinkedin/>,
    }
    return (
        <div>
            <div className='w-[15em] p-6 border-2 rounded-3xl shadow-xl flex'>
                <div className='text-[3em]  hover:text-indigo-600 duration-700'>
                    {iconMap[cardIcon]}
                </div>
                <div>
                    <p className='font-bold'>{cardTitle}</p>
                    <p className='text-gray-600'>{cardInfo}</p>
                </div>
            </div>
        </div>
    )
}
