import React from 'react'
import Card from './Card'
import front from "./IMAGES/front.jpeg"
const LatCourses = () => {
  return (
    <div className='mt-8'>
            <div className='flex flex-col justify-center items-center relative'>
                    
                    <h1 className='text-3xl font-bold bg-white px-12'>أحدث الكورسات</h1>

                    <div className='bg-greenPrime w-[100%] z-[-1] h-[2px] absolute top-[50%] left-0'>

                    </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-6 w-[80%] m-auto mt-5'>
                <Card image={front} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />
                <Card image={front} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />
                <Card image={front} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />
            </div>
    </div>
  )
}

export default LatCourses
