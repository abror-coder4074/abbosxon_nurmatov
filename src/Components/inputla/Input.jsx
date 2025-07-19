import React, { useRef } from 'react'
import "./input.css"
import strelka from '../../../public/photo.webp'

const Input = () => {
    const nameRef = useRef()
    const ageRef = useRef()
    const salaryRef = useRef()
    const callRef = useRef()


    const sendToTelegram = (e) => {
        e.preventDefault()
        const data = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            salary: salaryRef.current.value,
            description: callRef.current.value,
        }
        const token = '7798314658:AAFA7XRbKPrjIkG7HBG_71t3YaNQ-qhZkZo';
        const chatId = '@sorovlarr';
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: `Ism: ${data.name}\nYosh: ${data.age}\nSo'rov: ${data.description}\nDaromad: ${data.salary}`,
            }),
        })
            .then(response => response.json())
            .then(result => {
                console.log("Xabar yuborildi:", result);
            })
            .catch(error => {
                console.error("Xato:", error);
            });

    };

    return (
        <div className='iisd'>
            <div className="shakll">
                <h1 className="shakl">Formani to'ldiring</h1>
                <img src={strelka} alt="" />
            </div>
            <form className='inputlaa'>
                <div className="bir">
                    <label htmlFor="name">Ismingiz</label>
                    <input ref={nameRef} type="text" id='name' placeholder='Ismingizni yozing....' />
                </div>
                <div className="chziq"></div>
                <div className="bir">
                    <label htmlFor="age">Yoshingiz</label>
                    <input ref={ageRef} type="number" placeholder='Yoshingizni kiriting....' />
                </div>
                <div className="chziq"></div>
                <div className="bir">
                    <label htmlFor="">Oylik joriy daromad darajasi</label>
                    <input ref={salaryRef} type="text" placeholder='Daromadingizni yozing....' />
                </div>
                <div className="chziq"></div>
                <div className="bir">
                    <label htmlFor="text">Hamkorlik uchun so'rov. Nimani hal qilmoqchisiz?</label>
                    <input ref={callRef} type="text" placeholder='Sorovingizni yozing....' />
                </div>
                <div className="chziq"></div>
                <button onClick={sendToTelegram} className='inpbtn'>Ma'lumotlarni yuborish</button>
            </form>
        </div>
    )
}

export default Input
