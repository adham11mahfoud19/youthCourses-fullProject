import React from 'react'

const Subscribe = () => {
  return (
    <div className='mt-8 py-5 flex flex-col min-h-[400px] justify-between items-center px-6 ' >
            <div className='flex flex-col gap-4 w-full justify-center items-center'>

                <h1 className='text-4xl font-bold'>اشترك الآن</h1>
                <p className='text-2xl'>استثمر في تطوير مهاراتك واشترك الآن</p>

            </div>

            <div className='flex flex-col md:flex-row gap-5 mt-[100px] w-[95%] md:w-[85%] lg:w-[75%] mx-auto justify-evenly items-center'>
                    <div className='flex flex-col justify-center items-center gap-4 border-2 py-6 px-4 border-greenBox md:min-h-[350px]'>
                            <h1 className='text-4xl font-bold text-greenBox'>سنوي</h1>
                            <div className='flex flex-col'>
                                <h2 className='text-3xl font-bold text-center'>سعر</h2>
                                <p className='text-xl text-justify'>
                                    Lorem, ipsum dolor sit amet consectetur adi
                                    pisicing elit. Adipisci esse laudantium di
                                    cta quidem, dolores doloremque corrupti omnis autem! Libero natus culp
                                    a ex aliquid illum ipsum nobis quaerat dignissimos earum perspiciatis?
                                </p>
                            </div>

                            <button className=' mx-auto w-[80%]  bg-greenBox text-white font-bold text-2xl py-1 md:py-3 px-4 rounded-3xl flex justify-center items-center md:h-[40px]'>
                                اشترك الآن
                            </button>

                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 border-2 py-6 px-4 border-greenBox min-h-[350px]'>
                            <h1 className='text-4xl font-bold text-greenBox'>شهري</h1>
                            <div className='flex flex-col'>
                                <h2 className='text-3xl font-bold text-center'>سعر</h2>
                                <p className='text-xl text-justify'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe qui nesciunt ullam 
                                    asperiores molestias corporis, ut ducimus ipsam sequi consequuntur tenetur, am
                                    et fugit fugiat dolor mollitia ex autem odit deserunt?
                                </p>
                            </div>

                            <button className=' mx-auto w-[80%]  bg-greenBox text-white font-bold text-2xl py-1 md:py-3 px-4 rounded-3xl flex justify-center items-center md:h-[40px]'>
                                اشترك الآن
                            </button>

                    </div>
            </div>

            <form className='flex flex-col w-[70%] mx-auto gap-4 mt-[50px] justify-center items-center'>
                    <h1 className='text-3xl font-bold'>هل لديك كوبون خصم!</h1>
                    <div className='flex gap-3 justify-center items-center'>
                            <input type="text" className='outline-1 outline-greenBox rounded-xl  outline-solid outline h-[35px]' />
                            <input type="submit" className='bg-greenBox rounded-xl py-2 px-4 font-bold text-white' value={"تفعيل"} />
                    </div>
            </form>
    </div>
  )
}

export default Subscribe
