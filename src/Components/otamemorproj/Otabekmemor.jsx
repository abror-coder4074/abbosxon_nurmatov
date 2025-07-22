import React, { useEffect } from 'react'
import "./otabekmemor.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Otabekmemors from "../../../public/OTABEKMEMOR.PNG"
import otamemorpod from "../../../public/otabekmemor.jpg"
import otamem1 from "../../../public/otabekmemorproject2.jpg"
import otamem2 from "../../../public/otabekmemorproject3.jpg"
import otamem3 from "../../../public/otabekmemorproject1.jpg"
import otamem4 from "../../../public/otabekmemorproject4.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Otabekmemor = () => {
    useEffect(() => {
            AOS.init({ duration: 1000 })
        }, [])
  return (
   <div className='vrapper' >
               
               <div className="qobiljiga">
                   <img src={Otabekmemors} alt="" className='avarasm' />
                   <img src={otamemorpod} alt="" className='podps' />
               </div>
               <div className="yozuvi">
                   <h1 className='otabekmemori'>otabekmemor</h1>
                   <h4>Arxitektor, Dizayner</h4>
                   <p>4 oy ichida 3.000 obunachidan organik 21.000 obunachiga olib chiqdik!</p>
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
                <SwiperSlide><img className='hei2' src={otamem1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei3' src={otamem2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei' src={otamem3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='hei4' src={otamem4} alt="" /></SwiperSlide>
            </Swiper>
           </div>
  )
}

export default Otabekmemor

