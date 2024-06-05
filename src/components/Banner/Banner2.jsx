import React from 'react'

function Banner2() {
  const list = [
    {
      img: "./Images/seo.svg",
      title: "Automotive SEO",
      desc: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
    },
    {
      img: "./Images/ppc.svg",
      title: "PPC Precision",
      desc: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
    },
    {
      img: "./Images/social.svg",
      title: "Social Acceleration",
      desc: " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
    },
    {
      img: "./Images/content.svg",
      title: "Content Excellence",
      desc: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    },
    {
      img: "./Images/web.svg",
      title: "Web Design",
      desc: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    },
    {
      img: "./Images/data.svg",
      title: "Data-Driven Insights",
      desc: "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    },
    {
      img: "./Images/endtend.svg",
      title: "End-to-End Solutions",
      desc: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    },
    {
      img: "./Images/video.svg",
      title: "Video marketing",
      desc: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    }
  ]
  return (
    <div className='flex flex-col justify-center items-center mt-[6rem] w-full py-[5rem] px-[4rem] gap-[100px] bg-gray-100'>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='text-[32px] font-bold'>
          Our Service Offerings
        </div>
        <div className='text-[24px] font-light'>
          Strategies that Drive Property Market Excellence
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-rows-2 gap-9 w-full place-items-center">
        {list.map((card) => (
          <div className='w-[297px] h-[239px] rounded-[8px]  flex justify-center items-center flex-col gap-[16px] bg-white py-[32px] px-[16px] '>
            <div className='flex flex-col justify-center items-center gap-[8px] '>
              <div className='w-[52px] h-[52px] bg-gray-100 rounded-full flex items-center justify-center'>
                <img src={card.img} />
              </div>

              <div className='w-[265px] h-[23px] text-[18px] font-extrabold text-center'>
                {card.title}
              </div>
            </div>
            <div className='w-[265px] h-[76px] font-normal text-[14px]'>
              {card.desc}
            </div>
          </div>
        ))}
      </div>
      <button className='bg-blue-600 text-center text-white font-semibold px-9 py-1 rounded-[32px] text-xl w-[360px]'>Get Started </button>
    </div>


  )
}

export default Banner2
