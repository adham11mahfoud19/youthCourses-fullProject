"use client"
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { LuMenuSquare } from 'react-icons/lu'
import Image from 'next/image'
import logo from "./images/logo.png"
import { useAuth } from '@/hooks/auth';
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user } = useAuth({ middleware: 'guest' })
    console.log(user)
  let [navbar, setNavbar] = useState(false)
  let [scrollMenu, setScrollMenu] = useState(false)
  let router = useRouter()
  const { logout } = useAuth()




      return (
        <div className='' style={{height:"90px"}}>
          <nav className={`p-5 transition-all duration-200 bg-gradient-to-l dark:border-b-[1px] dark:border-white bg-white  dark:from-darkbg dark:to-darkbg shadow lg:flex lg:items-center lg:justify-center gap-x-8 z-10 w-[100%] fixed`}>
         <div className="flex justify-between items-center ">
           <Link href="/" className={`text-2xl ${navbar ?  "text-white" : "text-secondry"} flex justify-center items-center gap- font-semibold font-[Poppins] cursor-pointer`}>

                 <Image src={logo} width={50} height={50} alt='logo' />

           </Link>

           <span className={`text-3xl text-white cursor-pointer mx-2 lg:hidden m-auto block`}
                 onClick={() => {
                   // handle the menu and make it not transparent at the top in small screens when clicked
                   setScrollMenu(!scrollMenu)
                   if (!navbar) {
                     setNavbar(true)
                   }
                 }}
           >
              <LuMenuSquare className='text-bluePrime'/>
           </span>
         </div>

         <form action="www." className='flex sm:mr-[42%] mr-[13%] lg:mr-[0%]'>
            <input type="search" name=""  className='border-1 p-[8px] border-black outline outline-bluePrime outline-1 rounded-r-3xl' />
            <label htmlFor="se" className='bg-bluePrime p-[10px] w-[55px] flex justify-center items-center relative left-[2px] rounded-e-[20px]'>

            <FaSearch className='text-white text-xl' type='submit' />
            </label>
            <input type="submit" value="sumbit" id='se' className=' absolute top-[-500px]'/>
         </form>

         <ul className={`  text-white lg:flex text-xl lg:justify-between gap-x-1 lg:items-center z-[-1] lg:z-auto lg:static   w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100  transition-all ease-out duration-500
                 ${scrollMenu ? "opacity-100 top-[100px] static border-b-2 border-white" : "opacity-0 top-[-400px] absolute"}
         `}>

           <li className={`mx-1 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/courses`} className="font-semibold text-[16px] hover:bg-bluePrime hover:text-white dark:hover:text-bluePrime duration-300 text-black border-2 border-bluePrime pr-2 pl-2 py-1 w-[140px] rounded-3xl flex justify-center items-center">
                    مسارات التعلم
             </Link>
           </li>


          {
            user !== undefined ?  <li className={`mx-1 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
            <Link onClick={() => {
              Swal.fire({
                title: "هل أنت متأكد؟",
                text: "بتسجيلك الخروج سوف تفقد صلاحية الوصول إلى بعض الصفحات",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#FF0000",
                cancelButtonColor: "#1bb5d3",
                confirmButtonText: "تأكيد",
                cancelButtonText: 'إلغاء'
              }).then((result) => {
                if (result.isConfirmed) {
                    logout()
                  Swal.fire({
                    title: "تم تسجيل الخروج",
                    text: "سيتم توجيهك إلى صفحة تسجيل الدخول بعد قليل",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                  });
                }
              });
            }} href={`/`} className="font-semibold bg-red-600 text-[16px] hover:bg-white hover:text-red-600 dark:hover:text-bluePrime duration-300 text-white border-2 border-red-600 pr-2 pl-2 py-1 w-[140px] rounded-3xl flex justify-center items-center">
                   تسجيل الخروج
            </Link>
          </li> :
                                             <>
             <li className={`mx-1 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/login`} className="font-semibold text-[16px] hover:bg-bluePrime hover:text-white dark:hover:text-bluePrime duration-300 text-black border-2 border-bluePrime pr-2 pl-2 py-1 w-[140px] rounded-3xl flex justify-center items-center">
                    تسجيل الدخول
             </Link>
           </li>

           <li className={`mx-1 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/register`} className="font-semibold text-[16px] hover:bg-white border-1 border-bluePrime hover:text-bluePrime dark:hover:text-bluePrime duration-300 text-white border-2 bg-bluePrime pr-2 pl-2 py-1 w-[140px] rounded-3xl flex justify-center items-center">
                   إنشاء حساب
             </Link>
           </li>
                                            </>
          }




         </ul>
       </nav>
        </div>
       )
}

export default Navbar
