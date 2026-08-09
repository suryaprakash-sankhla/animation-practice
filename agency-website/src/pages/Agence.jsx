import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDevRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    '../public/images/1.jpg',
    '../public/images/2.jpg',
    '../public/images/3.jpg',
    '../public/images/4.jpg',
    '../public/images/5.jpg',
    '../public/images/6.jpg',
    '../public/images/7.jpg',
    '../public/images/8.jpg',
    '../public/images/9.jpg',
    '../public/images/10.jpg',
    '../public/images/11.jpg',
    '../public/images/12.jpg',
    '../public/images/13.jpg',
    '../public/images/14.jpg',

  ]

  useGSAP(function () {
    gsap.to(imageDevRef.current, {
      scrollTrigger: {
        trigger: imageDevRef.current,
        start: "top 20%",
        end: "top -70%",
        pin: true,
        scrub: 1,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = (Math.floor(elem.progress * imageArray.length));
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
          console.log(imageIndex);
          console.log(elem.progress);
        }
      }
    })
  })

  return (
    <div className='partent'>
      <div id="page1" className=''>
        <div ref={imageDevRef} className='h-[20.5vw]  overflow-hidden w-[15vw] rounded-3xl bg-red-500 absolute top-50 left-[29.9vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src='../public/images/1.jpg' alt="one" />
        </div>
        <div className='relative font-[font2] '>
          <div className='mt-[26.7vw]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e<br />Douze</h1>
          </div>
          <div className='pl-[40%] mt-1'>
            <p className=' text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div id="page2" className='h-screen'>

      </div>
    </div>
  )
}

export default Agence