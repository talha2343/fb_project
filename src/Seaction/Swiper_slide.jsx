import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import img7 from "../assets/7.jpg";
import imgaes from "../assets/image.png";

const Swiper_slide = ({setActiveIndex}) => {

    const progressCircle = useRef(null)
    const progressContent = useRef(null)

    const onAutoplayTimeLeft = (s, time, progress) => {

        progressCircle.current.style.setProperty(
            '--progress',
            1 - progress
        )

        progressContent.current.textContent =
            `${Math.ceil(time / 1000)}s`
    }

    return (

        <div className='hover:cursor-grab mx-10'>
<Swiper

    onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex)
    }}

    spaceBetween={10}
    centeredSlides={true}

    autoplay={{
        delay: 2000,
        disableOnInteraction: false,
    }}

    pagination={true}

    modules={[Autoplay, Pagination]}

    className="w-90 lg:w-100 h-125 rounded-3xl customSwiper"
>
                <SwiperSlide className=' flex items-center justify-center text-4xl font-bold text-white rounded-3xl'>
                    <img src={img7}  className='w-full h-full bg-cover' alt="" />
                </SwiperSlide>

                <SwiperSlide className=' flex items-center justify-center text-4xl font-bold text-white rounded-3xl'>
                    <img src={imgaes} className='w-full h-full bg-cover' alt="" />
                    
                </SwiperSlide>
                <div
                    className="autoplay-progress"
                    slot="container-end"
                >

                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                        ></circle>
                    </svg>

                    <span ref={progressContent}></span>

                </div>

            </Swiper>

        </div>
    )
}

export default Swiper_slide