import React from 'react'
import Link from 'next/link'
const Programs = () => {
    return (
        <div className='flex flex-col gap-6 p-8'>
            <p className='text-blue-700' >Programs</p>
            <h1 className='font-bold'>Find Yout path</h1>
            <p className='text-gray-400'>Programs that evolve with industry Demand</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className="1 flex flex-col gap-4 border border-gray-200 p-2 rounded-xl  text-xs ">
                    <p className='inline-block'>🏛️</p>
                    <p className='inline-block text-black'>Management</p>
                    <p className='inline-block text-gray-500 font-medium'>MBA BBA iMBA and more</p>
                    <Link className='text-blue-700' href="/Management" > View Courses -&gt;</Link>
                </div>
                <div className="2 flex flex-col gap-4 border border-gray-200 p-2 rounded-xl  text-xs ">
                    💻
                    <p className='inline-block'>Computing & IT</p>
                    <p className='inline-block text-gray-500 font-medium'>BCA, MCA, B.Tech, MSc IT</p>
                    <Link className='text-blue-700' href="/Computing" > View Courses -&gt;</Link>

                </div>
                <div className="3 flex flex-col gap-4 border border-gray-200 p-2 rounded-xl  text-xs ">
                    📊
                    <p className='inline-block text-black' >Commerce</p>
                    <p className='inline-block text-gray-500 font-medium'>B.Com, M.Com, ACCA</p>
                    <Link className='text-blue-700' href="/Comerce" > View Courses -&gt;</Link>

                </div>
                <div className='flex flex-col gap-4 border border-gray-200 p-2 rounded-xl  text-xs '>
                    📜
                    <p className='inline-block'>Certificate courses</p>
                    <p className='inline-block text-gray-500 font-medium'>AI/ML, Blockchain, DevOps</p>
                    <Link className='text-blue-700' href="/Computing" > View Courses -&gt;</Link>


                </div>
                <div className="4"></div>
            </div>
        </div>
    )
}

export default Programs
