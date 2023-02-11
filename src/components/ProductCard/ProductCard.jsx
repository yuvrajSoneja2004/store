import React from 'react';
import S from './ProductCard.module.css';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function ProductCard({ data, wid }) {

    let amounts = [432, 231, 675, 332, 323, 567, 234, 434];

    let randomAmt = amounts[Math.floor(Math.random() * amounts.length)];

    return (
        <Link to={`single-product-page/${data._id}`} className={S.noLink}>
            <div className={S.card} style={wid}>
                <div className={S.productImg}> <img src={data.images[0]} alt={data._id} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} /></div>
                <div className={S.productDetails}>
                    <label style={{ color: '#878787', marginBottom: '.3rem', textTransform: 'capitalize' }}>{data.company}</label>
                    <h2>{data.name.substring(0, 23)}...</h2>
                    <div className={S.lower}>
                        <div className={S.productPrice}><label>₹{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</label> <del>{data.price + randomAmt}</del></div>
                        <BsCartPlus size={24} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard