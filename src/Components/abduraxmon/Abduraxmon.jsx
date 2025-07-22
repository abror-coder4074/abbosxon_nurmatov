import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import abduraxmonoka from "../../../public/ABDURAXMON.JPEG"
import abdraxpod from "../../../public/abdurahmon.jpg"
import abdpro1 from "../../../public/abduraxmonproject1.jpg"
import abdpro2 from "../../../public/abduraxmonproject3.jpg"
import abdpro3 from "../../../public/abduraxmonproject2.jpg"
import abdpro4 from "../../../public/abduraxmonproject4.jpg"


const Abduraxmon = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <div className='vrapper' >

                <div className="qobiljiga">
                    <img src={abduraxmonoka} alt="" className='avarasm' />
                    <img src={abdraxpod} alt="" className='podps' />
                </div>
                <div className="yozuvi">
                    <h1 className='abdraxmon'>abdurahmon_islamov</h1>
                    <h4>Arxitektur va Dizayneri</h4>
                    <p>18 kun ichida 10.000 ming obunachi olib kirganmiz!</p>
                </div>
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='hei2' src={abdpro1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei3' src={abdpro2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei' src={abdpro3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei4' src={abdpro4} alt="" /></SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Abduraxmon
