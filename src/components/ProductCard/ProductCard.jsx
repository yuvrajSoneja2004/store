import React from 'react';
import S from './ProductCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';
function ProductCard({ data, wid }) {

    let { themeState } = useGlobalContext();

    let amounts = [432, 231, 675, 332, 323, 567, 234, 434];

    let randomAmt = amounts[Math.floor(Math.random() * amounts.length)];

    let navigate = useNavigate();

    return (

        // <div className={S.card} style={wid} onClick={() => { navigate(`/single-product-page/${data._id}`) }}>
        <Link to={`/single-product-page/${data._id}`} className={S.noLink} >
            <div className={S.card} style={{ ...wid, ...themeState }} onClick={() => { navigate(`/single-product-page/${data._id}`) }}>
                <div className={S.productImg}> <img src={data.images[0]} alt={data._id} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} /></div>
                <div className={S.productDetails}>
                    <label style={{ color: '#878787', marginBottom: '.3rem', textTransform: 'capitalize' }}>{data.company}</label>
                    <h2>{data.name.substring(0, 23)}...</h2>
                    <div className={S.lower}>
                        <div className={S.productPrice}><label>₹{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</label> <del>{data.price + randomAmt}</del></div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default ProductCard