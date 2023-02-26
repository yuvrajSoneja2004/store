import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';
import S from './ShopCumb.module.css';

function ShopCumb({ categoryType }) {

    let { bgLinks } = useGlobalContext();





    let backgroudStyle = {
        background: categoryType === "women" ? `url(${bgLinks.women})` : categoryType === "men" ? `url(${bgLinks.men})` : categoryType === "perfumes" ? `url(${bgLinks.perfumes})` : categoryType === "footwear" ? `url(${bgLinks.footwear})` : categoryType === "tech" ? `url(${bgLinks.tech})` : categoryType === "sale" ? `url(${bgLinks.sale})` : null, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'
    }


    return (
        <div className={S.whole} style={backgroudStyle}>
            <div className={S.content}>
                <h1>{categoryType}</h1>
                <div className={S.bear}>
                    <Link to='/' className={S.noLink}> <span>Home</span></Link>
                    <span>&gt;</span>
                    <Link to='/shop' className={S.noLink}>   <span>Shop</span></Link>
                    <span>&gt;</span>
                    <span>{categoryType}</span>
                </div>
            </div>
        </div>
    )
}

export default ShopCumb