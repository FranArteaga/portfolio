import React from 'react'
import { TiLocationOutline } from 'react-icons/ti'
import { HiOutlineMail} from 'react-icons/hi'
import { AiOutlineLinkedin} from 'react-icons/ai'
export default function ContactCard(props) {
    const { cardIcon, cardTitle, cardInfo } = props

    const iconMap = {
        location: <TiLocationOutline />,
        email: <HiOutlineMail/>,
        linkedin: <AiOutlineLinkedin/>,
    }
    const netMap ={
        Email: <a href="mailto:franrtg96@gmail.com" 
        className='hover:text-indigo-600 duration-300'>franrtg96@gmail.com</a>,
        Linkedin: <a href="https://www.linkedin.com/in/cfran-arteaga/" 
        className='hover:text-indigo-600 duration-300'>Profile</a>,
    }
    return (
        <div className='pb-5'>
            <div className=' p-6 border-2 rounded-3xl shadow-md flex items-center gap-4'>
                <div className='text-[3.5em]'>
                    {iconMap[cardIcon]}
                </div>
                <div>
                    <p className='font-bold'>{cardTitle}</p>
                    <p className='min-w-[8em] text-gray-600'>{netMap[cardTitle] ? netMap[cardTitle] : cardInfo }</p>
                </div>
            </div>
        </div>
    )
}
