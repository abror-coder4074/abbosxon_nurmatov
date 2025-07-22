import React, { useEffect } from 'react'
import "./reazultats.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './reazultats.css'
import { FreeMode, Pagination } from 'swiper/modules';
import Qobiljiga from "../../../public/QOBILJIGA.PNG"
import qobiljigapod from "../../../public/qobiljiga.jpg"
import qjproj1 from "../../../public/qobiljigaproject1.jpg"
import qjproj2 from "../../../public/qobiljigaproject2.PNG"
import qjproj3 from "../../../public/qobiljigaproject4.jpg"
import qjproj4 from "../../../public/qobiljigaproject3.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Reazultats = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className='vrapper' id='qobiljiga'>
            <div className="titlesi">
                <h2 className='qorsidagi'>bu odamlar allaqachon</h2>
                <h2 className='qizilidagi'>shaxsiy brendda edi</h2>
            </div>
            <div className="qobiljiga">
                <img src={Qobiljiga} alt="" className='avarasm' />
                <img src={qobiljigapod} alt="" className='podps' />
            </div>
            <div className="yozuvi">
                <h1 className='qobilll'>Qobil_Jiga</h1>
                <h4>Mashina ustasi</h4>
                <p className='www'>12 oyda 150.000 obunachi yig’ganmiz va sotuvlarini 4-5 x ga oshirishga erishganmiz!</p>
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
                <SwiperSlide><img className='hei2' src={qjproj2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei3' src={qjproj3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei' src={qjproj1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei4' src={qjproj4} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Reazultats
