import React from 'react'

const JoinUs = () => {
  return (
    <div className='flex justify-center items-center h-[500px] w-full bg-gradient-to-b from-trns to-white'>
      <div className='w-[80%] md:w-[70%] flex flex-col gap-4 m-auto justify-center items-center'>
            <h1 className='text-3xl md:text-5xl font-bold text-center'>إنضم إلى آلاف من المبدعين العرب</h1>
            <h5 className='text-gray-400 text-xl md:text-3xl'>
                --مئات الدورات الآن باشتراك واحد--
            </h5>
            <div className='flex flex-col md:flex-row mt-5 gap-5'>
                    <div className='text-2xl font-bold py-3 px-4 border-2 border-greenPrime bg-transparent text-greenPrime hover:bg-greenPrime hover:text-white duration-150 rounded-3xl'>
                            تصفح الكورسات
                    </div>

                    <div className='text-2xl font-bold py-3 px-4 border-2 border-bluePrime bg-bluePrime text-white hover:bg-white hover:text-bluePrime duration-150 rounded-3xl'>
                            تصفح الكورسات
                    </div>
            </div>
      </div>
    </div>
  )
}

export default JoinUs
