import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1]'>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] text-center flex items-center justify-center'>
        L'étincelle
      </div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] text-center flex items-center justify-center'>
        qui
        <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-5'>
          <Video/>
        </div>
        génère
      </div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] text-center flex items-center justify-center'>
        la créativité
      </div>
    </div>
  )
}

export default HomeHeroText