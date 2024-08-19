import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaSearchLocation, FaTelegram, FaYoutube } from 'react-icons/fa'
import { LuNetwork, LuPlaneTakeoff } from 'react-icons/lu'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 md:gap-5 h-[200px] text-white mt-12 md:h-[400px] py-6 px-8 justify-center items-center bg-grayPrime'>
             <div className='flex md:hidden text-[12px] gap-6 justify-center items-center w-[300px]'>
                    <h1 className='md:text-3xl font-bold'>الرئيسية</h1>
                    <h1 className='md:text-3xl font-bold'>سياسة الخصوصية</h1>
                    <h1 className='md:text-3xl font-bold'>الأحكام والشروط</h1>
            </div>

            <div className='md:flex md:h-[250px] hidden  flex-col gap-4 justify-center items-center border-l-2 border-black'>

                    <div className='flex gap-4  w-[100%] items-center justify-evenly'>
                        <LuNetwork className='text-green-700 text-3xl' />
                        <p className='text-xl'>
                            www.youth-guide.com
                        </p>
                    </div>

                    <div className='flex gap-4  w-[100%] items-center justify-evenly'>
                        <FaSearchLocation className='text-green-700 text-3xl' />
                        <p className='text-xl'>
                            مشروع الأوقاف جانب سنسيشن
                        </p>
                    </div>

                    <div className='flex gap-4 m-w-[1000px] w-[300px] items-center justify-between'>
                        <FaPhone className='text-green-700 text-3xl' />
                        <p className='text-xl'>
                            0912345678
                        </p>
                    </div>

            </div>

            <div className='flex md:h-[250px] md:flex-col col-span-3 md:col-span-1 gap-3 justify-evenly md:justify-center items-center md:border-l-2 border-black'>

                    <div className='flex gap-4'>
                        <FaTelegram className='text-gray-600 text-3xl' />
                        <p className='text-xl hidden md:block'>
                            www.youth-guide.com
                        </p>
                    </div>

                    <div className='flex gap-4'>
                        <FaFacebook className='text-gray-600 text-3xl' />
                        <p className='text-xl hidden md:block'>
                            www.youth-guide.com
                        </p>
                    </div>

                    <div className='flex gap-4'>
                        <FaInstagram className='text-gray-600 text-3xl' />
                        <p className='text-xl hidden md:block'>
                            www.youth-guide.com
                        </p>
                    </div>

                    <div className='flex gap-4'>
                        <FaYoutube className='text-gray-600 text-3xl' />
                        <p className='text-xl hidden md:block'>
                            www.youth-guide.com
                        </p>
                    </div>

            </div>

            <div className='hidden md:flex md:flex-col gap-6 justify-center items-center'>
                    <h1 className='md:text-3xl font-bold text-white'>الرئيسية</h1>
                    <h1 className='md:text-3xl font-bold text-green-700'>سياسة الخصوصية</h1>
                    <h1 className='md:text-3xl font-bold text-green-700'>الأحكام والشروط</h1>
            </div>

            <div className='text-xl md:text-4xl col-span-3 text-center font-bold text-white md:w-[80%] mx-auto'>
                    جميع الحقوق محفوظة لدليل الشباب 2024
            </div>

    </div>
  )
}

export default Footer
