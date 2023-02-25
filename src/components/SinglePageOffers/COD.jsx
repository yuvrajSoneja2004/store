import React from 'react'
import { CiMoneyBill } from 'react-icons/ci';
import S from './SingleOffers.module.css';

function COD() {
    return (
        <div className={S.whole}>
            <div className={S.wrapper}>
                <CiMoneyBill className={S.icon} />

            </div>
            <span className={S.title}>Cash on Delivery</span>
        </div>
    )
}

export default COD