import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import mubosher from "../../../public/MUBOSHSHER.PNG"
import mubosherpod from "../../../public/mubosherqurilish.jpg"
import mubqur1 from "../../../public/mubosherqurilishproject1.jpg"
import mubqur2 from "../../../public/mubosherqurilishproject3.jpg"
import mubqur3 from "../../../public/mubosherqurilishproject2.jpg"
import mubqur4 from "../../../public/mubosherqurilishproject4.jpg"



const Mubosherqurilish = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <div className='vrapper' >

                <div className="qobiljiga">
                    <img src={mubosher} alt="" className='avarasm' />
                    <img src={mubosherpod} alt="" className='podps' />
                </div>
                <div className="yozuvi">
                    <h1 className='mubosherr'>mubosher_qurilish</h1>
                    <h4>Prorab</h4>
                    <p>6 oyda 150.000 ga yaqin obunachi yig’ganmiz!</p>
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
                    <SwiperSlide><img className='hei2' src={mubqur1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='hei3' src={mubqur2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='hei' src={mubqur3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='hei4' src={mubqur4} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Mubosherqurilish
