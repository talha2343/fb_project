import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import images from '../assets/images.jfif'


const Seacond_page = () => {

    const Boxref = useRef(null)
    const Herotext = useRef(null)
    const Pararef = useRef(null)
    const imgref = useRef(null)

    gsap.registerPlugin(ScrollTrigger);


    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: Boxref.current,
                scroller: "body",
                start: "top 20%",
            }
        })


        tl.from(imgref.current, {
            xPercent: 100,
            duration: 1,
        })


        tl.from(Herotext.current, {
            y: 100,
            opacity: 0,
            ease: "power3.out",
            duration: 0.5
        })

        tl.from(Pararef.current, {
            y: 100,
            opacity: 0,
            ease: "power3.out",
            stagger: {
                each: 0.3,
            },
            duration: 0.5
        });
    })



    return (
        <div ref={Boxref} className='h-screen w-full relative overflow-hidden flex items-center justify-evenly 2xl:flex-row flex-col '>
            <img src={images} className='absolute top-0 left-0 h-full w-full -z-10 object-cover' alt="" />
            <div className='h-full w-full flex items-center 2xl:justify-center justify-start 2xl:p-0 px-5'>
                <div className='flex flex-col text-black w-full md:w-[85%] 2xl:w-2/3 py-6 md:py-10 2xl:py-0 '>
                    <h2 ref={Herotext} className='font-[text] tracking-tighter leading-tight text-4xl md:text-5xl 2xl:text-7xl whitespace-normal'>
                        About <br />
                        Foreign Brothers
                    </h2>
                    <p ref={Pararef} className=' mt-6 md:mt-8 2xl:mt-10 text-base md:text-lg 2xl:text-xl leading-relaxed'>
                        Foreign Brothers Real Estate Brokers L.L.C. is a Dubai-based
                        real estate brokerage specializing in off-plan investments,
                        luxury residences, waterfront properties, and international investor advisory.
                        <br /><br />
                        With strong expertise in the Dubai property market and
                        international client network, we help investors secure high-potential opportunities with transparency, market insight, and long-term value.
                    </p>
                </div>
            </div>
            <div ref={imgref} className='h-full w-full rounded-tl-full rounded-bl-full overflow-hidden bg-cover border-gray-600 border-2 bg-right bg-[url(./src/assets/15.jpg)]'></div>
        </div>
    )

}

export default Seacond_page
