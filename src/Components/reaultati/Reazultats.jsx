import React, { useEffect } from 'react'
import "./reazultats.css"
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
                <p>12 oyda 150.000 obunachi yig’ganmiz va sotuvlarini 4-5 x ga oshirishga erishganmiz!</p>
            </div>
            <div className="projects" >
                <img src={qjproj2} alt="" className='hei slide-image' data-aos="fade-right"/>
                <img src={qjproj1} alt="" className='hei1 slide-image' data-aos="fade-right"/>
                <img src={qjproj3} alt="" className='hei2 slide-image' data-aos="fade-right"/>
                <img src={qjproj4} alt="" className='hei3 slide-image' data-aos="fade-right"/>
            </div>
        </div>
    )
}

export default Reazultats
