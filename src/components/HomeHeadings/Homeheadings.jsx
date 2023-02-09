import React from 'react';
import S from './Homeheadings.module.css';

function Homeheadings({ title, desc }) {
    return (
        <div className={S.wrapper}>

            <div className={S.cont}>
                <div className={S.w}>
                    <div className={S.line}></div>
                    <h2>{title}</h2>
                    <div className={S.line}></div>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Homeheadings