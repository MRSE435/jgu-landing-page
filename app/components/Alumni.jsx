import React from 'react'
import Link from 'next/link'
const Programs = () => {
    return (
        <div className='flex flex-col gap-6 p-8'>
            <p className='text-blue-700' >ALUMNI VOICES</p>
            <h1 className='font-bold'>What our graduates say</h1>
            <p className='text-gray-400'>Real stories from people who built careers here</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className="1 flex flex-col gap-4 border border-gray-200 p-2 rounded-xl  text-xs ">

                    <div className='flex gap-4    '>
                        <div className="boximg bg-[#dbeafe] rounded-full text-3xl">
                            JG
                        </div>
                        <div className="name flex gap-2 flex-col">
                            <p className='text-black'>Jigardhan Gandhvi</p>
                            <p className='text-gray-500'>Celebrity singer</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-yellow-500 text-xl'>★★★★★</p>
                    </div>
                    <p className='text-wrap text-gray-500'>"Faculty members were more than teachers — they were mentors who guided us at every step of the journey."</p>


                </div>
                
                <div className="1 flex flex-col gap-4 border border-gray-200 p-2 rounded-xl  text-xs ">

                    <div className='flex gap-4    '>
                        <div className="boximg bg-[#dbeafe] rounded-full text-3xl">
                            JG
                        </div>
                        <div className="name flex gap-2 flex-col">
                            <p className='text-black'>Jigardhan Gandhvi</p>
                            <p className='text-gray-500'>Celebrity singer</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-yellow-500 text-xl'>★★★★★</p>
                    </div>
                    <p className='text-wrap text-gray-500'>"Faculty members were more than teachers — they were mentors who guided us at every step of the journey."</p>


                </div>


                <div className="1 flex flex-col gap-4 border border-gray-200 p-2 rounded-xl  text-xs ">

                    <div className='flex gap-4    '>
                        <div className="boximg bg-[#dbeafe] rounded-full text-3xl">
                            JG
                        </div>
                        <div className="name flex gap-2 flex-col">
                            <p className='text-black'>Jigardhan Gandhvi</p>
                            <p className='text-gray-500'>Celebrity singer</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-yellow-500 text-xl'>★★★★★</p>
                    </div>
                    <p className='text-wrap text-gray-500'>"Faculty members were more than teachers — they were mentors who guided us at every step of the journey."</p>


                </div>
               
                
            </div>
        </div>
    )
}

export default Programs
