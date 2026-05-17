

import React from 'react'
import Link from 'next/link'
const Campus = () => {
    return (
        <div className='flex flex-col gap-6 p-8'>
            <p className='text-blue-700' >CAMPUS LIFE</p>
            <h1 className='font-bold'>See our campus</h1>
            <p className='text-gray-400'>
                State-of-the-art facilities built for modern learning</p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">

                <div className="md:col-span-6 bg-blue-500 h-52 rounded-2xl">
                    <img className="object-cover w-full h-full rounded-2xl relative" src="https://manage.collnod.com/Upload/Content/web_img_0_13_9_2023_15_44_39.gif" alt="" />
                    <p className='absolute'>Main Campus building</p>
                </div>

                <div className="md:col-span-3 bg-green-500 h-52 rounded-2xl">
                    <img className="object-cover w-full h-full rounded-2xl relative" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ApZapdwM33BmILL7t3H5btQo7Sz58uuBVg&s" alt="" />

                </div>

                <div className="md:col-span-3 bg-purple-500 h-52 rounded-2xl">
                    <img className="object-cover w-full h-full rounded-2xl relative" src="https://jguni.in/images/CRM08221.JPG" alt="" />

                </div>

            </div>
        </div>
    )
}

export default Campus;
