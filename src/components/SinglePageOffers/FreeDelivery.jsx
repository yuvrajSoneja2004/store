import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci';
import S from './SingleOffers.module.css';

function FreeDelivery() {
    return (
        <div className={S.whole}>
            <div className={S.wrapper}>
                <CiDeliveryTruck className={S.icon} />

            </div>
            <span className={S.title}>Free Delivery</span>
        </div>
    )
}

export default FreeDelivery