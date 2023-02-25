import React from 'react'
import { CiRepeat } from 'react-icons/ci';
import S from './SingleOffers.module.css';

function ReturnPolicy() {
    return (
        <div className={S.whole}>
            <div className={S.wrapper}>
                <CiRepeat className={S.icon} />

            </div>
            <span className={S.title}>Return Policy</span>
        </div>
    )
}

export default ReturnPolicy