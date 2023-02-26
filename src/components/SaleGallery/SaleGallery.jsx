import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';
import S from './SaleGallery.module.css';

function SaleGallery() {
    let { themeState } = useGlobalContext();
    return (
        <div className={S.wrapper} style={themeState} data-aos="fade-up-left">
            <Link to='/products/tech' className={S.rmLink}>
                <div className={`${S.bxA} ${S.bx}`}>
                    <div className={S.content}>
                        <h2>lookbook 2023</h2>
                        <h3>make love this look</h3>
                    </div>
                </div>
            </Link>
            <Link to='/products/sale' className={S.rmLink}>
                <div className={`${S.bxB} ${S.bx}`}>
                    <div className={S.content}>
                        <h4>summer sale</h4>
                        <h1>upto 70%</h1>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default SaleGallery;