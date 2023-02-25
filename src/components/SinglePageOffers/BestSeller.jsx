import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import S from './SingleOffers.module.css';

function BestSeller() {
    return (
        <div className={S.whole}>
            <div className={S.wrapper}>
                <CiCircleCheck className={S.icon} />

            </div>
            <span className={S.title}>Best Seller</span>
        </div>
    )
}

export default BestSeller