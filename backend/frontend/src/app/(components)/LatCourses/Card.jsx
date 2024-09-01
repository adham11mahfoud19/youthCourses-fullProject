import Image from 'next/image'
import React from 'react'
import { FaClock, FaPrescription } from 'react-icons/fa'

const Card = ({image, title, name, time}) => {
  return (
    <div className='flex flex-col border-2 border-bluePrime rounded-xl gap-2 justify-center items-center'>
            <div className='flex flex-col justify-center items-center rounded-xl gap-3 bg-gradient-to-b from-greenPrime to-bluePrime w-[100%] py-8'>
                <Image src={image} alt='...' className=' rounded-2xl'/>
                <h1 className='text-3xl font-bold text-white'>
                    {title}
                </h1>

            </div>

            <div className='flex flex-col w-[100%] p-3'>
                <div className='flex gap-2'>
                        <FaPrescription />
                        <p className='text-bluePrime font-bold'>{name}</p>
                </div>
                <div className='flex gap-2 items-center justify-end'>
                        <FaClock />
                        <p className='text-gray-400'>
                            {time}
                        </p>
                </div>

            </div>
    </div>
  )
}

export default Card
