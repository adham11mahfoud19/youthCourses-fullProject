'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Signup = () => {

    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [phone, setphone] = useState('')
    const [lName, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()
            if(password !== passwordConfirmation) {
                Swal.fire({
                    title: "كلمة المرور غير متطابقة.",
                    text: "يرجى إدخال كلمة مرور متطابقة لتجنب ضياع كلمة المرور",
                    icon: "error",
                    confirmButtonColor: "#1bb5d3",

                  })
            } else {
                register({
                    name,
                    lName,
                    phone,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                    setErrors,
                })
                Swal.fire({
                    icon:"success",
                    showConfirmButton: false,
                    title:'تم تسجيل الحساب بنجاح',
                    text:"سيتم تحويلك إلى الصفحة الرئيسية",
                    timer: 3000
                })
            }

}
    return (
        <div className='flex justify-center items-start h-[1300px] md:h-[1000px] w-full bg-gradient-to-b from-trns to-white'>
          <div className='w-[80%] md:w-[70%] flex flex-col gap-4 mt-[100px] pt-[50px] md:mt-[50px] mx-auto justify-center items-center'>
                <h1 className='text-3xl md:text-5xl font-bold'>تسجيل الحساب</h1>

                <form onSubmit={submitForm} className='w-full h-[300px] mt-[40px] grid grid-cols-1 md:grid-cols-2  justify-between gap-10 items-center'>

                    <div className='flex flex-col col-span-2 md:col-span-1  gap-4 w-full'>
                        <label className='text-black text-2xl' htmlFor="fn">
                            الاسم الأول
                        </label>
                        <input
                           value={name}
                           onChange={event => setName(event.target.value)}
                        type="text" id='fn' className='bg-transparent outline-1 p-[15px] outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                    </div>

                    <div className='flex flex-col col-span-2 md:col-span-1 w-full gap-4'>
                        <label className='text-black text-2xl' htmlFor="ln">
                            الاسم الأخير
                        </label>
                        <input
                          type="text"
                          value={lName}
                          onChange={event => setlName(event.target.value)}
                          required
                         id='ln' className='bg-transparent outline-1 p-[15px] outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                    </div>

                    <div className='flex flex-col col-span-2 md:col-span-1 w-full gap-4'>
                        <label className='text-black text-2xl' htmlFor="email">
                           البريد الإلكتروني
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={event => setEmail(event.target.value)}
                          required
                         className='bg-transparent outline-1 p-[15px] outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                    </div>

                    <div className='flex flex-col col-span-2 md:col-span-1 w-full gap-4'>
                        <label className='text-black text-2xl' htmlFor="phone">
                           رقم الهاتف
                        </label>
                        <input
                       id="email"
                       type="number"
                       value={phone}
                       onChange={event => setphone(event.target.value)}
                       required
                          className='bg-transparent outline-1 p-[15px] outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                    </div>

                    <div className='flex flex-col col-span-2 md:col-span-1 w-full gap-4'>
                        <label className='text-black text-2xl' htmlFor="password">
                           كلمة المرور
                        </label>
                        <input
                           id="password"
                           type="password"
                           value={password}
                           onChange={event => setPassword(event.target.value)}
                           required
                           autoComplete="new-password"
                            className='bg-transparent outline-1 p-[15px] outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                    </div>

                    <div className='flex flex-col col-span-2 md:col-span-1 w-full gap-4'>
                        <label className='text-black text-2xl' htmlFor="confirmpassword">
                           كلمة المرور
                        </label>
                        <input
                         id="confirmpassword"
                         type="password"
                         value={passwordConfirmation}
                         onChange={event =>
                             setPasswordConfirmation(event.target.value)
                         }
                         required
                           className='bg-transparent outline-1 p-[15px] outline-gray-500 rounded-2xl  outline-solid outline h-[45px]' />
                    </div>

                    <input type="submit" className=' cursor-pointer col-span-2 mx-auto w-[60%] mt-12 bg-gradient-to-l from-bluePrime to-greenPrime text-white font-bold text-2xl py-3 px-4 rounded-3xl h-[80px]' value="تسجيل حساب جديد"/>

                    <div className='flex flex-col justify-center items-center relative col-span-2 w-[50%] mx-auto'>

                        <h1 className=' text-gray-500 z-[2] font-bold bg-white px-4'>أو</h1>

                        <div className='bg-gray-500 w-[100%] md:w-[400px] z-[1] h-[2px] absolute top-[50%] left-0 md:left-[10%]'>

                        </div>
                </div>

                <div className='mt-3 text-gray-500 text-center flex justify-center items-center mx-auto col-span-2'>
                        لديك حساب!  <Link href={'/login'} className='text-blue-400 text-center mx-2'> قم بالضغط هنا</Link>  لتسجيل الدخول
                </div>

                </form>

          </div>
        </div>
      )
}


export default Signup
