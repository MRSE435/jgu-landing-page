import React from 'react'
import Link from 'next/link'

const Partners = () => {
    return (
        <div className='flex flex-col gap-6 p-8'>
            <p className='text-blue-700' >PARTNERS</p>
            <h1 className='font-bold'>Trusted by industry leaders</h1>

            <div className='grid grid-cols-2 md:grid-cols-8 gap-4'>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <img src="/images/ibm.png" alt="IBM" />
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <img src="/images/asian-african.png" alt="Asian African" />
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <img src="/images/aventure.png" alt="Aventure" />
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <img src="/images/coding.png" alt="Coding" />
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <img src="/images/ISRO-Color.svg" alt="ISRO" />
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <img src="/images/logo.svg" alt="Logo" />
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <img src="/images/sac.png" alt="SAC" />
                </div>
                <div className="1 flex  gap-4 border border-gray-200 p-4 rounded-xl  text-xs ">
                    <img src="/images/virtual-height.png" alt="Virtual Height" />
                </div>
            </div>
        </div>
    )
}

export default Partners;