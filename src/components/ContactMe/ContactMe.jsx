import React, { useEffect, useState } from 'react';
import S from './ContactMe.module.css';
import { useGlobalContext } from '../../contexts/globalContext';

function ContactMe() {
    let { themeState } = useGlobalContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <div className={S.wrapper} style={themeState}>
            <h1>Contact Page</h1>
            <div className={S.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15106.60110145241!2d82.701687727741!3d18.81373269582129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3af05dc359e0eb%3A0x659b6a7d5b4ce3db!2sKoraput%2C%20Odisha!5e0!3m2!1sen!2sin!4v1677284862372!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={S.form}>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder='Enter your name' onChange={e => setName(e.target.value)} value={name} required />
                    <input type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} required />
                    <textarea cols="30" rows="10" placeholder='Enter your message' onChange={e => setMsg(e.target.value)} required value={msg}></textarea>
                    <button type="submit">SEND</button>
                </form>

            </div>
        </div>
    )
}

export default ContactMe