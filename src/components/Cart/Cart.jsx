import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';
import S from './Cart.module.css';
import CartRow from './CartRow';
import Sed from '../../assets/sed.jpg'

function Cart() {

    let { cart, themeState } = useGlobalContext();

    useEffect(() => {
        window.scroll(0, 0);
    }, [cart])

    if (cart.length === 0) {
        return <div className={S.noItems} style={themeState}>
            <img src={Sed} alt="sed" />
            <h1>Cart is Empty.</h1>
            <Link to='/products'>  <div className={S.addToCart}><button>Shop Products</button></div></Link>
        </div>
    }

    return (
        <div className={S.wrapper} style={themeState}>

            <div className={S.box}>
                <div className={S.headerRow}>
                    <div className={S.left}><h4>PRODUCT</h4></div>
                    <div className={S.right}><h4>TOTAL</h4></div>
                </div>
                {
                    cart.map(item => <CartRow data={item} />)

                }

            </div>
            <Link to='/products'> <div className={S.addToCart}><button>Shop More</button></div></Link>
        </div>
    )
}

export default Cart