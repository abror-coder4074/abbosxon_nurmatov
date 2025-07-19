import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
                    <h1>alaziz_mebel</h1>
                    <h4>Mebelchi</h4>
                    <p>3 oy ichida 25.000 ming obunachi olib kirganmiz va sotuvlari 3x ga oshishiga sababchi bo’lganmiz!</p>
                </div>
                <div className="projects" >
                    <img src={alaz1} alt="" className='hei slide-image' data-aos="fade-right" />
                    <img src={alaz2} alt="" className='hei1 slide-image' data-aos="fade-right" />
                    <img src={alaz3} alt="" className='hei2 slide-image' data-aos="fade-right" />
                    <img src={alaz4} alt="" className='hei3 slide-image' data-aos="fade-right" />
                </div>
            </div>
        </div>
    )
}

export default Alazizmebel
