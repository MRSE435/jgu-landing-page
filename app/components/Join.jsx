import React from 'react'
import Link from 'next/link'
const Programs = () => {
    return (
        <div className='flex flex-col gap-6 p-8 bg-[#f8faff]'>
            <p className='text-blue-700' >WHY JG</p>
            <h1 className='font-bold'>Our strengths</h1>
            <p className='text-gray-400'>What sets us apart from the rest</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <div className='text-4xl text-blue-400' >01</div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-black'>Immersive & experiential learning</p>
                        <p className='text-gray-500'>Real-life projects and industry use-cases build hands-on expertise from day one.</p>
                    </div>
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <div className='text-4xl text-blue-400' >02</div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-black'>Industry + academia faculty</p>
                        <p className='text-gray-500'>Learn from scholars who bring both research depth and real-world experience.</p>
                    </div>
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <div className='text-4xl text-blue-400' >03</div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-black'>Interdisciplinary approach</p>
                        <p className='text-gray-500'>Students from diverse backgrounds collaborate, ideate and solve together.</p>
                    </div>
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <div className='text-4xl text-blue-400' >03</div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-black'>Interdisciplinary approach</p>
                        <p className='text-gray-500'>Students from diverse backgrounds collaborate, ideate and solve together.</p>
                    </div>
                </div>
                <div className="4"></div>
            </div>
        </div>
    )
}

export default Programs
