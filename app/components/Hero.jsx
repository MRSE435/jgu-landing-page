import React from 'react'

const Hero = () => {
    return (
        <div className=" md:w-screen md:h-screen flex flex-col md:flex-row ">
            <div className="left  md:w-[50%]  bg-[#042c53]  h-[50vh] md:h-screen  flex justify-center items-center  ">
                <div className='flex flex-col gap-5 p-4 xl:gap-20 xl:p-20'>
                    <div className='bg-[rgba(255,255,255,0.15)]   pl-3 pr-3 pt-2 pb-2  w-fit   inline-block rounded-2xl'>
                        Admissions Open 2026-27
                    </div>
                    <div className='flex flex-col xl:gap-10'>
                        <p className='font-bold text-white text-2xl xl:text-5xl'>A new-age </p>
                        <p className='font-bold text-white text-2xl xl:text-5xl'> tech-driven </p>
                        <p className='font-bold text-white text-2xl xl:text-5xl font-sans'> University</p>


                    </div>
                    <p className='text-sm text-white xl:text-2xl '>UGC approved programs in management ,computing,commerce and law-built around real industry demand</p>
                    <div className='flex gap-3'>
                        <button className='text-blue-900 z-auto   rounded-md  p-2 bg-white'>Explore programs</button>
                        <button className='bg-[#042c53] text-white p-2 rounded-md border-white border-2 pl-4 pr-4 '> Campus tour</button>
                    </div>
                </div>

            </div>

            <div className="right md:w-[50%]  md:h-screen h-[50vh]  bg-[#042c53]">
                <img
                    className="w-full h-full object-cover  "
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                    alt="JG University Campus"
                />
            </div>
        </div>
    )
}

export default Hero
