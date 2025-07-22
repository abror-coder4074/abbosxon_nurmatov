import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import azalziz from "../../../public/ALAZIZMEBEL.PNG"
import alazizpod from "../../../public/alazizpodps.jpg"
import alaz1 from '../../../public/alazizproject1.jpg'
import alaz2 from '../../../public/alazizproject3.jpg'
import alaz3 from '../../../public/alazizproject2.jpg'
import alaz4 from '../../../public/alazizproject4.jpg'


const Alazizmebel = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <div className='vrapper' >

                <div className="qobiljiga">
                    <img src={azalziz} alt="" className='avarasm' />
                    <img src={alazizpod} alt="" className='podps' />
                </div>
                <div className="yozuvi">
                    <h1 className='al-aziz'>alaziz_mebel</h1>
                    <h4>Mebelchi</h4>
                    <p>3 oy ichida 25.000 ming obunachi olib kirganmiz va sotuvlari 3x ga oshishiga sababchi bo’lganmiz!</p>
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
                <SwiperSlide><img className='hei2' src={alaz1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei3' src={alaz2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei' src={alaz3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei4' src={alaz4} alt="" /></SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Alazizmebel
