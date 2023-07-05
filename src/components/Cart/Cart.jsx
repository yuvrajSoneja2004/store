import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';
import S from './Cart.module.css';
import CartRow from './CartRow';
import Sed from '../../assets/sed.jpg'

function Cart() {

    let { cart, themeState } = useGlobalContext();
    const [totalAmt, settotalAmt] = useState(0);


   

    useEffect(() => {
        window.scroll(0, 0);
        console.log(cart , "The cart daat")
        const amount = cart.reduce(
            (total, product) => total + product.price,
            0
          );
          settotalAmt(amount)
        
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
            <div style={{textAlign: 'center'}}>
                <h2>Total: ₹{totalAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                <h2>Total Products: {cart.length}</h2>
            </div>
            <Link to='/products'> <div className={S.addToCart}><button>Shop More</button></div></Link>
        </div>
    )
}

export default Cart