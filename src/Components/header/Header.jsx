import React from 'react'
import "./header.css"
import img from "../../../public/realpg.PNG"

const Header = () => {
  return (
    <div>
        <header>
            <nav>
                <div className="logo"data-aos="fade-right">
                    <h1 className='dasd'>Abbosxon</h1>
                    <h1 className='dsad'>Nurmatov</h1>
                </div>
                <ul>
                    <li><a href="qobiljiga">Jarayon</a></li>
                    <li><a href="">Holatlar</a></li>
                    <li><a href="">Anketa</a></li>
                </ul>
            </nav>
            <div className="wrapper">
                <div className="titletaraf" data-aos="fade-right">
                    <h1 className='shaxsiyb'>Shaxsiy Brend</h1>
                    <h2 className='Fio'>Abbosxon</h2>
                    <h2 className='fip'>Nurmatov</h2>
                    <p className='parag'>Tadbirkorlar va o’z sohasini ustasi bo’lgan hunarmandlarning shaxsiy brendlarini qurish bilan shug’ullanaman!</p>
                    <button  className='fwokf'>Taqdimotni ko'rish</button>
                </div>
                <div className="imgaf" data-aos="fade-left">
                    <img src={img} alt="" />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
