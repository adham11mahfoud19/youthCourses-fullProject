import React from 'react'

const Sections = () => {
  return (
    <div className='mt-5 flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-4xl font-bold m-auto'>
                تصفح جميع الأقسام
            </h1>
            <div className='grid grid-cols-4 md:flex  md:flex-row md:gap-5 gap-3 justify-center items-center mt-5'>
                   <div className='md:text-2xl w-fit  col-span-4 font-bold py-3 px-4 border-2 border-bluePrime bg-transparent text-black  md:w-[200px] flex justify-center items-center hover:bg-bluePrime hover:text-white duration-150 rounded-3xl'>
                           كل الأقسام
                    </div>
                    
                   <div className='md:text-2xl col-span-2 w-full font-bold py-3 md:px-4 border-2 border-bluePrime bg-transparent text-black  md:w-fit flex justify-center items-center hover:bg-bluePrime hover:text-white duration-150 rounded-3xl'>
                           الغرافيك والتصميم
                    </div>

                   <div className='md:text-2xl w-[80px] font-bold py-3 md:px-4 border-2 border-bluePrime bg-transparent text-black  md:w-[200px] flex justify-center items-center hover:bg-bluePrime hover:text-white duration-150 rounded-3xl'>
                           المونتاج
                    </div>

                   <div className='md:text-2xl w-[80px] font-bold py-3 md:px-4 border-2 border-bluePrime bg-transparent text-black  md:w-[200px] flex justify-center items-center hover:bg-bluePrime hover:text-white duration-150 rounded-3xl'>
                           البرمجة
                    </div>
            </div>
    </div>
  )
}

export default Sections
