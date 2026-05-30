import React, { useRef, useState } from 'react'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import Swiper_slide from './Swiper_slide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Third_page = () => {

    gsap.registerPlugin(ScrollTrigger)

    const Herotext = useRef(null)
    const Slideref = useRef(null)
    const Textref = useRef(null)
    const Boxref = useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)

    const data = [
        {
            name: "IBRAHIM YAGHI",
            role: "Founder & Managing Director",
            desc: `is a real estate professional with over 18 years of experience in Dubai’s property market, specializing in off-plan investments, plot and land acquisition, and commercial real estate.

Born and raised in the UAE, with a Master’s Degree in Marketing and Business Management, he brings deep market knowledge and developer-side experience to deliver strategic, high-value investment solutions.`
        },
        {
            name: "TARIQ KHAN",
            role: "Founder & Managing Director",
            desc: `is a real estate professional with over 15 years of experience in Dubai’s property market, specializing in commercial real estate, off-plan investments, and investor advisory.

Born and raised in the UAE, with a background in Finance and Management and strong banking experience, he provides valuable financial insight and delivers client-focused, investment-driven real estate solutions.`
        }
    ]

    useGSAP(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: Boxref.current,
                scroller: "body",
                start: "top 80%",
            }
        })

        tl.from(Herotext.current, {
            yPercent: 100,
            opacity: 0,
            duration: 0.6
        })

        tl.from(Slideref.current, {
            yPercent: 50,
            opacity: 0,
            duration: 0.6
        }, "-=0.3")

        tl.from(Textref.current, {
            yPercent: 50,
            opacity: 0,
            duration: 0.6
        }, "-=0.3")

    }, [])

    return (
        <div
            ref={Boxref}
            className='
                min-h-screen w-full relative overflow-hidden
                py-14 md:py-20 lg:py-24
            '
        >

            {/* Background */}
            <img
                src="./src/assets/images.jfif"
                className='absolute inset-0 h-full w-full object-cover -z-10'
                alt=""
            />

            {/* Heading */}
            <h1
                ref={Herotext}
                className='
                    text-center px-4 font-[text] tracking-tight leading-tight

                    text-3xl sm:text-4xl md:text-5xl lg:text-7xl
                '
            >
                TWO VISIONARIES ONE COMMITMENT
            </h1>

            {/* CONTENT WRAPPER */}
            <div
                className='
                    flex flex-col lg:flex-row

                    items-center justify-between

                    gap-10 md:gap-14 lg:gap-16

                    pt-12 md:pt-14 lg:pt-16

                    px-4 md:px-10 lg:px-16
                '
            >

                {/* SLIDER */}
                <div
                    ref={Slideref}
                    className='
                        w-full lg:w-1/2

                        flex items-center justify-center
                    '
                >
                    <Swiper_slide setActiveIndex={setActiveIndex} />
                </div>

                {/* TEXT */}
                <div
                    ref={Textref}
                    className='
                        w-full lg:w-1/2

                        text-black

                        lg:border-l-4 border-black
                        lg:pl-10
                    '
                >

                    <h2
                        className='
                            font-[text] tracking-tight leading-tight

                            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                        '
                    >
                        {data[activeIndex]?.name}
                    </h2>

                    <p
                        className='
                            mt-6 md:mt-8

                            text-base sm:text-lg md:text-xl

                            leading-relaxed max-w-2xl
                        '
                    >
                        <span className='font-semibold'>
                            {data[activeIndex]?.role}
                        </span>

                        <br /><br />

                        {data[activeIndex]?.desc}
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Third_page