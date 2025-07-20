import React, { useEffect } from 'react'
import video from "../../../public/abbosnew.mp4"
import strelkaa from '../../../public/photo.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'


import "./video.css"

function Video() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className='qqqq'>
            <div className="fokada">
                <h1 className='qoraa'>shaxsiy brend</h1>
                <h1 className='qizill'>o'z ichiga nimalarni oladi</h1>
                <div className="rassm">
                    <h3>Videoda batafsil tushuntirilgan</h3>
                    <img src={strelkaa} alt="" />

                </div>
            </div>
            <video width="800" controls data-aos="fade-up">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}



export default Video
