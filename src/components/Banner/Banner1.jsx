import React from 'react'

function Banner1() {
    return (
        <div className='w-full mt-[108px]  '>
            <div className='relative'>
                <img className='w-full min-h-[600px] ' src='./Images/bgImg1.png' />
                <div className='absolute top-1/2 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5 px-5 w-full max-w-[899px] h-fit '>
                    <div className=' flex flex-col items-center justify-center gap-2 md:gap-6'>
                        <div className='font-normal text-3xl md:text-[48px] text-center leading-10 flex flex-col justify-center gap-1 md:gap-5'>
                            <span>Elevate <span className='text-blue-700'> Real Estate Success </span> with </span>
                            <span>Osumare's Digital Expertise</span>
                        </div>
                        <div className='text-lg font-thin text-center'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</div>
                    </div>
                    <button className='bg-blue-600 text-center text-white font-semibold px-9 py-1 rounded-[32px] text-xl w-[260px]'>Get Started</button>
                </div>
                <img className='absolute w-[300px] h-[538px] md:w-[769px] md:h-[538px] top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2' src='./Images/houseImg.svg' />
            </div>

            <div className='mt-[15rem] md:mt-[26rem] flex justify-center items-center px-2 flex-col'>
                <h2 className='text-xl md:text-[32px] font-bold mb-8'>Real Estate-Focused Digital Mastery</h2>
                <div className='my-5 flex flex-col md:flex-row md:px-10 gap-10'>
                    <img className='md:w-5/12' src='./Images/dirUp.svg' />
                    <div className='flex flex-col justify-center items-start px-8 '>
                        <h3 className='font-bold text-xl mt-10 mb-5 md:text-[32px]'>Unlock the Potential of Digital Real Estate Excellence</h3>
                        <p className='md:text-[24px]'>
                            At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
                        </p>
                        <button className='bg-blue-600 text-center text-white font-semibold px-9 py-1 rounded-[32px] text-sm w-[160px] mt-3 md:text-[18px] md:h-[61px] md:w-[233px] md:mt-9'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner1
