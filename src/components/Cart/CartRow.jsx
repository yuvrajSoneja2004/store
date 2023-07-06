import React, { useEffect, useState } from 'react'
import S from './Cart.module.css';
import { CiCircleRemove } from 'react-icons/ci';
import {HiOutlinePlusSm , HiOutlineMinusSm} from 'react-icons/hi'
import { useGlobalContext } from '../../contexts/globalContext';

function CartRow({ data }) {

    let { dispatch  } = useGlobalContext();
    const [prodQtys, setprodQtys] = useState(data.qty);

    useEffect(() => {

    } , [])
    

    useEffect(() => {
        if(prodQtys < 1){
            setprodQtys(1)
        }
    } , [prodQtys])


    return (
        <div className={S.wholeRow}>
            <div className={S.removeItem} >
                <CiCircleRemove className={S.icon} onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: data }) }} />
            </div>
            <div className={S.left}>

                <div style={{ display: 'flex', alignItems: 'center' }} className={S.manage}>

                    <img src={data.images[0]} alt="dssd" width={100} className={S.img} />

                    <h3 className={S.name}>{data.name.slice(0, 9)}...</h3>
                </div>
                <h3 style={{ marginRight: '3rem' }} className={S.price}>₹{data.price * prodQtys.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <div className={S.qtySingleProduct} >
                    <button onClick={() => {setprodQtys(prodQtys +1)}} style={{zIndex: '9999'}} > <HiOutlinePlusSm size={15} /></button>
                    <div>{prodQtys}</div>
                    <button style={{ zIndex: '9999'}} onClick={() => {setprodQtys(prodQtys -1)}}> <HiOutlineMinusSm size={15}/></button>
                   </div>
                <div style={{width: '20px' , height: '20px' , backgroundColor: `${data.selectedProductColor}`}}></div>
            </div>
           
        </div>
    )
}

export default CartRow