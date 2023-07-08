import React, { useEffect, useState } from 'react';
import S from './Cartpage.module.css';
import {HiOutlinePlusSm , HiOutlineMinusSm} from 'react-icons/hi'
import {CgRemove} from 'react-icons/cg';
import { useGlobalContext } from '../contexts/globalContext';


function CRow({data , sendDataToParent}) {
    

    let { dispatch  } = useGlobalContext();
    const [prodQtys, setprodQtys] = useState(data.qty);

    

    useEffect(() => {
        if(prodQtys < 1){
            setprodQtys(1)
        }

        sendDataToParent(prodQtys); 
    } , [prodQtys])



  




  return (
    <>
    <div className={S.cartItemRow}>
        <div className={S.cleft}>
        <img src={data.images[0]} alt="fuck" />
        {/* <div className={S.productImg} style={{background: `url(${mg})`}}></div> */}
        <div className={S.qtySingleProduct} >
                    <button onClick={() => {setprodQtys(prodQtys +1)}} style={{zIndex: '9999'}} > <HiOutlinePlusSm size={15} /></button>
                    <div>{prodQtys}</div>
                    <button style={{ zIndex: '9999'}} onClick={() => {setprodQtys(prodQtys -1)}}> <HiOutlineMinusSm size={15}/></button>
                   </div>
        </div>
        <div className={S.cright}>
            <div>
            <h1>{data.name.slice(0 ,80)}</h1>
            </div>
            <div className={S.selectedColor}>
                <h1>Selected Color:</h1>
                <div style={{background: `${data.selectedProductColor}`}}></div>
            </div>
            <div>
                <h1 style={{color: '#878787'}}>Brand: {data.company.toUpperCase()}</h1>
            </div>
            <h1 className={S.productPrice}>₹{data.price * prodQtys.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            <div className={S.removeItem} onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: data }) }}>
                <CgRemove  size={20} style={{marginRight: '5px'}}/>
                <h2>REMOVE FROM CART</h2>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default CRow