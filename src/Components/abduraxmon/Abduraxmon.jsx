import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
                <div className="projects" data-aos="fade-right" >
                    <img src={abdpro1} alt="" className='hei slide-image' data-aos="fade-right" />
                    <img src={abdpro2} alt="" className='hei1 slide-image' data-aos="fade-right" />
                    <img src={abdpro3} alt="" className='hei2 slide-image' data-aos="fade-right" />
                    <img src={abdpro4} alt="" className='hei3 slide-image' data-aos="fade-right" />
                </div>
            </div>
        </div>
    )
}

export default Abduraxmon
