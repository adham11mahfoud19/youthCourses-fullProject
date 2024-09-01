"use client"
import Link from 'next/link'
import React from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import Swal from 'sweetalert2'
const Signin = () => {

  const router = useRouter()

  const { login } = useAuth({
      middleware: 'guest',
      redirectIfAuthenticated: '/',

  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
      if (router.reset?.length > 0 && errors.length === 0) {
          setStatus(atob(router.reset))

      } else {
          setStatus(null)
      }
  })

  const submitForm = async event => {
      event.preventDefault()
      login({
        email,
        password,
        remember: shouldRemember,
        setErrors,
        setStatus,
    })
    console.log(status)
        //     setTimeout(() => {
        //         if(errors.length === 0) {


        //             Swal.fire({
        //                 icon:"success",
        //                 showConfirmButton: false,
        //                 title:'تم تسجيل الدخول بنجاح',
        //                 text:"سيتم تحويلك إلى الصفحة الرئيسية",
        //                 timer: 3000
        //             })

        //   } else {

        //             Swal.fire({
        //                 title: "البيانات المدخلة غير صحيحة.",
        //                 text: "يرجى التأكد من إدخال بيانات صحيحة ثم إعادة المحاولة",
        //                 icon: "error",
        //                 confirmButtonColor: "#1bb5d3",

        //               })

        //   }
        //     }, 3000)
  }

  return (
    <div className='flex justify-center items-start h-[900px] md:h-[1000px] w-full bg-gradient-to-b from-trns to-white'>
      <div className='w-[80%] md:w-[70%] flex flex-col gap-4 mt-[100px] pt-[50px] md:mt-[50px] mx-auto justify-center items-center'>
            <h1 className='text-3xl md:text-5xl font-bold'>تسجيل الدخول</h1>

            <form onSubmit={submitForm} className='md:w-[50%] h-[300px] mt-[40px] grid grid-cols-1 md:grid-cols-2  justify-between gap-10 items-center'>



                <div className='flex flex-col col-span-2  w-full gap-4'>
                    <label className='text-black text-2xl' htmlFor="email">
                       البريد الإلكتروني
                    </label>
                    <input


                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                    autoFocus
                    className='bg-transparent outline-1 p-[15px] outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                </div>



                <div className='flex flex-col col-span-2  w-full gap-4'>
                    <label className='text-black text-2xl' htmlFor="password">
                       كلمة المرور
                    </label>
                    <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="current-password"
                    className='bg-transparent outline-1 p-[15px] outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                </div>

                <div className='flex col-span-2 justify-between w-full gap-4'>

                    <div className='gap-4 flex '>
                         <input
                         onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                             className='w-[15px]'
                             id="remember_me"
                            type="checkbox"
                            name="remember"
                            />
                             <label className='text-black text-xl' htmlFor="remember_me">
                                   تذكيري
                            </label>
                    </div>

                    <Link
                    href="/forgot-password"
                    className='text-blue-400 font-bold text-xl '>
                            نسيت كلمة المرور!
                    </Link>
                </div>





                <input type="submit" className=' col-span-2 mx-auto w-[60%] md:mt-12 bg-gradient-to-l from-bluePrime to-greenPrime text-white font-bold text-2xl py-3 px-4 rounded-3xl h-[80px]' value="تسجيل الدخول"/>

                <div className='flex flex-col justify-center items-center relative col-span-2 w-[50%] mx-auto'>

                    <h1 className=' text-gray-500 font-bold bg-white px-4 z-[2]'>أو</h1>

                    <div className='bg-gray-500 w-[100%] md:w-[400px] z-[1] h-[2px] absolute top-[50%] left-0 md:left-[-25%]'>

                    </div>
            </div>

            <div className='mt-3 text-gray-500 text-center flex justify-center items-center mx-auto col-span-2'>
                    ليس لديك حساب!  <Link href={'/register'} className='text-blue-400 text-center mx-2'> قم بالضغط هنا</Link>  لتسجيل حساب جديد
            </div>

            </form>

      </div>
    </div>
  )
}

export default Signin
