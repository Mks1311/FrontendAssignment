import React from 'react'

function Navbar() {
  return (
    <div
    className='w-screen h-[108px] backdrop-blur z-10 flex justify-between items-center fixed px-[1rem]' >
      <img className='w-[8rem]' src='/Images/Logo.svg'/>
      <button className='border border-black rounded-3xl w-[8rem] h-[44px] text-center font-medium'>Contact Us</button>
    </div>
  )
}

export default Navbar
