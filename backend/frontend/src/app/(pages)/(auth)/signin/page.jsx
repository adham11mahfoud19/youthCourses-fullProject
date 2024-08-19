import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
    <div className='flex justify-center items-start h-[900px] md:h-[1000px] w-full bg-gradient-to-b from-trns to-white'>
      <div className='w-[80%] md:w-[70%] flex flex-col gap-4 mt-[100px] pt-[50px] md:mt-[50px] mx-auto justify-center items-center'>
            <h1 className='text-3xl md:text-5xl font-bold'>تسجيل الدخول</h1>

            <form className='md:w-[50%] h-[300px] mt-[40px] grid grid-cols-1 md:grid-cols-2  justify-between gap-10 items-center'>

          

                <div className='flex flex-col col-span-2  w-full gap-4'>
                    <label className='text-black text-2xl' htmlFor="email">
                       البريد الإلكتروني
                    </label>
                    <input type="email" id='email' className='bg-transparent outline-1 outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                </div>

              

                <div className='flex flex-col col-span-2  w-full gap-4'>
                    <label className='text-black text-2xl' htmlFor="password">
                       كلمة المرور
                    </label>
                    <input type="password" id='password' className='bg-transparent outline-1 outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                </div>

                <div className='flex col-span-2 justify-between w-full gap-4'>
                   
                    <div className='gap-4 flex '>
                         <input type="checkbox" id='checkbox' className='w-[15px]' />
                             <label className='text-black text-xl' htmlFor="checkbox">
                                   تذكيري
                            </label>
                    </div>

                    <div className='text-blue-400 font-bold text-xl '>
                            نسيت كلمة المرور!
                    </div>
                </div>

                

               

                <input type="submit" className=' col-span-2 mx-auto w-[60%] md:mt-12 bg-gradient-to-l from-bluePrime to-greenPrime text-white font-bold text-2xl py-3 px-4 rounded-3xl h-[80px]' value="تسجيل حساب جديد"/>

                <div className='flex flex-col justify-center items-center relative col-span-2 w-[50%] mx-auto'>
                    
                    <h1 className=' text-gray-500 font-bold bg-white px-4 z-[2]'>أو</h1>

                    <div className='bg-gray-500 w-[100%] md:w-[400px] z-[1] h-[2px] absolute top-[50%] left-0 md:left-[-25%]'>

                    </div>
            </div>

            <div className='mt-3 text-gray-500 text-center flex justify-center items-center mx-auto col-span-2'>
                    ليس لديك حساب!  <Link href={'/signup'} className='text-blue-400 text-center mx-2'> قم بالضغط هنا</Link>  لتسجيل حساب جديد
            </div>

            </form>
            
      </div>
    </div>
  )
}

export default Signin
