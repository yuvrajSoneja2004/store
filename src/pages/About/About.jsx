import React, { useEffect } from 'react';
import S from './About.module.css';
import ME from '../../assets/me.jpg'
import { useGlobalContext } from '../../contexts/globalContext'

function About() {

    let { themeState } = useGlobalContext();

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <div className={S.wrapper} style={themeState}>
            <div className={S.left}>
                <img src={ME} alt="myPicture" />
            </div>
            <div className={S.right}>
                <h1>About Me</h1>
                <p>My name is <a href="https://www.linkedin.com/in/yuvrajsoneja/" target='_blank' rel="noreferrer">Yuvraj Soneja</a>, and I am a web developer with a passion for creating visually stunning and functionally efficient websites.

                    Over the time, I have gained extensive experience in the field of web development, specializing mostly in front-end development. My expertise lies in creating beautiful, responsive designs using HTML, CSS, React , Boootstrap and many more, which are optimized for speed and usability.

                    That being said, I am also well-versed in back-end development, having worked on a number of projects that required database management, server-side scripting, and API integration. My knowledge of technologies such as Express.js, RESTful APIs, and Node.js has enabled me to create robust web applications that deliver a seamless user experience.

                    If you're looking for a web developer who can bring your ideas to life, then look no further! Please feel free to browse through my portfolio by clicking <a href="https://yuvrajportfolio.netlify.app/" target='_blank' rel="noreferrer">here</a> to see some of my past projects and get in touch if you have any questions or would like to discuss your project in more detail.
                </p>
            </div>
        </div>
    )
}

export default About