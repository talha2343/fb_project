import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import img0 from '../assets/0.jpg'
import imgmd0 from '../assets/md0.jpg'
import img2 from '../assets/2.png'
import img4 from '../assets/4.png'
import logo from '../assets/log.png'

const First_Page = () => {
    const Logoref = useRef(null)
    const Textref = useRef(null)
    const Devref = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.context(() => {
            const tl = gsap.timeline({ delay: 1 })

            tl.from(Devref.current, {
                x: "-100%",
                duration: 1,
                delay: 5.5
            })

            tl.from(Logoref.current, {
                yPercent: 100,
                opacity: 0,
                duration: 1
            })

            tl.from(Textref.current, {
                opacity: 0,
                duration: 1
            })
        })
    })

    return (
        <div className='relative h-screen w-full overflow-hidden'>
            <img src={img0} className='absolute inset-0 h-full w-full object-cover -z-10 hidden 2xl:block' alt="" />
            <img src={img0} className='absolute inset-0 h-full w-full object-cover -z-10 hidden md:block 2xl:hidden' alt="" />
            <img src={imgmd0} className='absolute inset-0 h-full w-full object-cover -z-10 block md:hidden' alt="" />
            <img src={img2} className='absolute top-10 left-0 w-full h-full opacity-100' alt="" />
            <div ref={Devref} className=' h-full w-full bg-linear-to-r from-black via-black to-transparent flex items-center justify-center 2xl:justify-start px-4 sm:px-8 md:px-12 2xl:px-40 opacity-90'>
                <div className='flex flex-col text-white text-center 2xl:text-left gap-6 md:gap-8 2xl:gap-10'>
                    <div className='flex items-center justify-center 2xl:justify-start flex-col overflow-hidden h-28 md:h-36 2xl:h-55'>
                        <img ref={Logoref} src={logo} className='w-auto h-20 sm:h-24 md:h-32 2xl:h-55' alt=""/>
                    </div>
                    <div ref={Textref} className='mt-2 md:mt-6 2xl:mt-10'>
                        <h2 className='font-sans font-extralight uppercase leading-tight text-center text-sm sm:text-base md:text-lg 2xl:text-2xl'>
                            YOUR VISION. OUR COMMITMENT
                        </h2>
                        <img src={img4} className='h-8 sm:h-10 md:h-12 2xl:h-15 w-full' alt=""
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default First_Page