import Card from '@/app/(components)/FamCourses/Card'
import React from 'react'
import front from './IMAGES/front.jpeg'
const Course = () => {
  return (
    <div className='mt-12'>
               <div className='flex flex-col justify-center items-center relative my-[100px]'>
                    
                    <h1 className='text-5xl font-bold bg-white px-12'>تصميم جرافيك</h1>

               
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-6 w-[80%] m-auto mt-12'>

                <Card image={front} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />
                <Card image={front} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />
                <Card image={front} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />
             
            </div>
    </div>
  )
}

export default Course
