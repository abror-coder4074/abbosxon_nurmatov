import React, { useEffect } from 'react'
import "./otabekmemor.css"
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
                   <h1>otabekmemor</h1>
                   <h4>Arxitektor, Dizayner</h4>
                   <p>4 oy ichida 3.000 obunachidan organik 21.000 obunachiga olib chiqdik!</p>
               </div>
               <div className="projects" >
                   <img src={otamem1} alt="" className='hei slide-image' data-aos="fade-right"/>
                   <img src={otamem2} alt="" className='hei1 slide-image' data-aos="fade-right"/>
                   <img src={otamem3} alt="" className='hei2 slide-image' data-aos="fade-right"/>
                   <img src={otamem4} alt="" className='hei3 slide-image' data-aos="fade-right"/>
               </div>
           </div>
  )
}

export default Otabekmemor

