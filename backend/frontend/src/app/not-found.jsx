import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
      <div className='flex flex-col gap-10 justify-center items-center'>
            <h1 className='font-bold text-3xl text-red-600 text-center'>
                لم يتم العثور على نتائج!
            </h1>
            <div className='flex flex-col md:flex-row justify-between gap-6'>
                    <Link href={'/'} className='border-greenPrime hover:bg-greenPrime hover:text-white duration-200 cursor-pointer border-2 rounded-2xl bg-transparent py-2 px-4 text-2xl'>
                            الذهاب للصفحة الرئيسية
                    </Link>
                    <div className='border-greenPrime hover:bg-greenPrime hover:text-white duration-200 cursor-pointer border-2 rounded-2xl bg-transparent py-2 px-4 text-2xl'>
                            الذهاب لصفحة الاشتراك
                    </div>
            </div>
      </div>
    </div>
  )
}

export default NotFound
