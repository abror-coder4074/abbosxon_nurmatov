import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
                         <h1>mubosher_qurilish</h1>
                         <h4>Prorab</h4>
                         <p>6 oyda 150.000 ga yaqin obunachi yig’ganmiz!</p>
                     </div>
                     <div className="projects" >
                         <img src={mubqur1} alt="" className='hei slide-image' data-aos="fade-right"/>
                         <img src={mubqur2} alt="" className='hei1 slide-image' data-aos="fade-right"/>
                         <img src={mubqur3} alt="" className='hei2 slide-image' data-aos="fade-right"/>
                         <img src={mubqur4} alt="" className='hei3 slide-image' data-aos="fade-right"/>
                     </div>
                 </div>
    </div>
  )
}

export default Mubosherqurilish
