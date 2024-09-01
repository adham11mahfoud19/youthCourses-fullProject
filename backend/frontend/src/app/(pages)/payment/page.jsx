import Image from 'next/image'
import React from 'react'
import bemo from './bemo.png'
import syriatel from './syriatel.png'
import haram from './haram.png'

const Payment = () => {
  return (
    <div className='pt-12 md:pt-6 min-h-[700px] flex flex-col gap-12 justify-center items-center bg-white md:bg-gradient-to-b from-bluePrime to-white'>
                <div className='flex flex-col w-[90%] mx-auto md:border-2 md:border-black md:bg-white'>

                    <div className='flex flex-col gap-5 w-[90%] mx-auto bg-bluePrime md:bg-white md:w-full justify-center items-center py-4 px-6 md:border-b-2 md:border-black'>
                            <h1 className='text-3xl md:text-4xl'>سنوي مرة واحدة فقط</h1>
                            <p className='text-xl md:text-2xl text-white md:text-black'>
                            سنوي مرة واحدة فقط
                            سنوي مرة واحدة فقط
                            سنوي مرة واحدة فقط
                            سنوي مرة واحدة فقط
                            </p>
                            <p className='mt-2 text-xl md:text-2xl w-fit ml-auto text-white md:text-black'>
                                سعر:
                            </p>
                    </div>

                    <form className='flex flex-col gap-5 w-full justify-center items-center py-4 border-2 md:border-none border-gray-500'>
                            <h1 className='text-3xl font-bold'>اختر طريقة الدفع</h1>
                            <div className='flex gap-5 w-full md:border-b-2 md:border-black border-b-2 border-gray-500 justify-evenly items-center'>
                                <label htmlFor="bemo">
                                    <Image src={bemo} alt='...' />
                                </label>
                                <input type="radio" name="pay" className='  top-[-500%]' id='bemo' />

                                <label htmlFor="syriatel">
                                    <Image src={syriatel} alt='...' />
                                </label>
                                <input type="radio" name="pay" className='  top-[-500%]' id='syriatel' />

                                <label htmlFor="haram">
                                    <Image src={haram} alt='...' />
                                </label>
                                <input type="radio" name="pay" className='  top-[-500%]' id='haram' />

                            </div>

                            <div className='flex flex-col gap-8'>
                               <div className='flex gap-3'>
                               <input type="checkbox" id='taj'/>

                                    <label htmlFor="taj" className='text-2xl'>تجديد تلقائي بنفس السعر</label>
                               </div>

                               <input type="submit" className=' mx-auto w-[100%]  bg-greenPrime text-white font-bold text-2xl py-1 md:py-3 px-4 rounded-md md:rounded-3xl md:h-[80px]' value="اشتراك الآن"/>
                            </div>
                    </form>

                </div>
    </div>
  )
}

export default Payment
