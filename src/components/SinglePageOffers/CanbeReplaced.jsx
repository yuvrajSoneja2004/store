import React from 'react'
import { CiFaceSmile } from 'react-icons/ci';
import S from './SingleOffers.module.css';

function CanbeReplaced() {
    return (
        <div className={S.whole}>
            <div className={S.wrapper}>
                <CiFaceSmile className={S.icon} />

            </div>
            <span className={S.title}>Return Policy</span>
        </div>
    )
}

export default CanbeReplaced