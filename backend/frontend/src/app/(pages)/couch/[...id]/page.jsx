import React from 'react'
import back from "./background.png"
import mk from "./mk.png"
import Image from 'next/image'
import Card from '@/app/(components)/FamCourses/Card'
const Couch = () => {
  return (
    <div className='pt-12 md:pt-6 min-h-[700px] flex flex-col gap-12 justify-center items-start bg-gradient-to-b from-bluePrime to-white'>
        <div className='flex flex-col gap-4 justify-center items-center mt-5'>
                <Image src={mk} alt='...' width={200} height={200} />
                <h1 className='text-4xl font-bold '>Graphic Design</h1>
                <h1 className='text-3xl font-bold '>Melad al-Qoussery</h1>
                    <div className='mt-3 text-2xl w-[80%] mx-auto text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                         aperiam voluptatibus? 
                        Iusto odio suscipit modi sed aut corrupti nemo deserunt, temporibus, iure magni placeat
                         veritatis dolores perferendis pariatur doloremque distinctio!
                    </div>

        </div>

        <div className='flex flex-col gap-8 justify-center mt-6 items-center w-[80%] mx-auto'>
                <h1 className='text-4xl font-bold'>كل الكورسات</h1>
                <div className='grid md:grid-cols-3 gap-6 justify-center items-center w-[100%]'>

                <Card image={back} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />
                <Card image={back} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />
                <Card image={back} name={"Adham Mahfoud"} time={"30 ساعة تدريبية"} title={"Front-End"} />

                </div>
        </div>
    </div>
  )
}

export default Couch
