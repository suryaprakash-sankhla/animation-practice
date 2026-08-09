import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-6 '> 
      <div className='h-44 border-5 flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50] border-white px-10  uppercase rounded-full'>
        <Link to="./projects" className='text-[6vw]  mt-6'>Projects</Link>
      </div>
      <div className=' h-44 border-5 flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50] border-white px-10  uppercase rounded-full '>
        <Link to="./agence" className='text-[6vw] mt-6'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText