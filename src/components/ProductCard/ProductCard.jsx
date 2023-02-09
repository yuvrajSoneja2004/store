import React from 'react';
import S from './ProductCard.module.css';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function ProductCard() {
    return (
        <Link to='/' className={S.noLink}>
            <div className={S.card}>
                <div className={S.productImg}></div>
                <div className={S.productDetails}>
                    <label style={{ color: '#878787', marginBottom: '.3rem' }}>BRAND</label>
                    <h2>Product Name</h2>
                    <div className={S.lower}>
                        <div className={S.productPrice}><label>₹69</label> <del>₹87</del></div>
                        <BsCartPlus size={24} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard