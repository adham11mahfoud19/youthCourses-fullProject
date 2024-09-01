import React from 'react'
import { FaNetworkWired, FaPersonBooth, FaTimes } from 'react-icons/fa'

const COurse = () => {
  return (
    <div className='py-5 px-3 lg:px-14 mt-14 min-h-[500px] grid grid-cols-4 gap-x-8 gap-y-12 md:justify-evenly items-center'>
        <div className='col-span-4 w-[300px] mr-auto py-2 px-4 bg-greenPrime rounded-3xl text-white text-3xl font-bold flex justify-center items-center'>
                سجل الآن
        </div>
        <iframe   className='col-span-2 lg:col-span-3 mb-auto h-[50%] lg:h-[350px] w-[100%]  md:w-[70%] lg:w-[80%]'
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        <div className='col-span-2 lg:col-span-1 ml-[10px] flex flex-col gap-5 py-2 pb-16 px-4 border-2 border-greenPrime rounded-s-2xl md:min-h-[350px] justify-between items-center'>
                <div className='py-2 px-4 bg-greenPrime rounded-3xl h-[80px] w-[100%] rounded-se-none text-white text-3xl flex justify-center items-center'>
                        Back-End
                </div>

                <div className='flex gap-5 border-b-2 w-[100%] border-black justify-start items-center'>
                    <FaTimes className='text-xl md:text-3xl text-gray-600' />
                    <h1 className='text-xl md:text-3xl text-gray-600'>30 ساعة تدريبية</h1>
                </div>
                <div className='flex gap-5 border-b-2 w-[100%] border-black justify-start items-center'>
                    <FaPersonBooth className='text-xl md:text-3xl text-gray-600' />
                    <h1 className='text-xl md:text-3xl text-gray-600'>Majd Rajab</h1>
                </div>
                <div className='flex gap-5 border-b-2 w-[100%] border-black justify-start items-center'>
                    <FaNetworkWired className='text-xl md:text-3xl text-gray-600' />
                    <h1 className='text-xl md:text-3xl text-gray-600'>مبتدئ</h1>
                </div>
        </div>  
    </div>
  )
}

export default COurse
