import React, { useState } from 'react';
import S from './Cartpage.module.css';
import {HiOutlinePlusSm , HiOutlineMinusSm} from 'react-icons/hi'
import {CgRemove} from 'react-icons/cg';

function CRow({data}) {
    // const [prodQtys, setprodQtys] = useState(data.qty)
    const [prodQtys, setprodQtys] = useState()
    let mg = `https://images.hungama.com/c/1/e7b/5ee/327324/327324_700x394.jpg`;
  return (
    <>
    <div className={S.cartItemRow}>
        <div className={S.cleft}>
        <img src="https://images.hungama.com/c/1/e7b/5ee/327324/327324_700x394.jpg" alt="fuck" />
        {/* <div className={S.productImg} style={{background: `url(${mg})`}}></div> */}
        <div className={S.qtySingleProduct} >
                    <button onClick={() => {setprodQtys(prodQtys +1)}} style={{zIndex: '9999'}} > <HiOutlinePlusSm size={15} /></button>
                    <div>{prodQtys}4</div>
                    <button style={{ zIndex: '9999'}} onClick={() => {setprodQtys(prodQtys -1)}}> <HiOutlineMinusSm size={15}/></button>
                   </div>
        </div>
        <div className={S.cright}>
            <div>
            <h1>SUpSUpSUpSUpSUpSUpSUpSUpSUpSUpSUp</h1>
            </div>
            <div className={S.selectedColor}>
                <h1>Selected Color:</h1>
                <div ></div>
            </div>
            <div>
                <h1 style={{color: '#878787'}}>Brand: Apple</h1>
            </div>
            <h1 className={S.productPrice}>$299</h1>
            <div className={S.removeItem}>
                <CgRemove  size={20} style={{marginRight: '5px'}}/>
                <h2>REMOVE FROM CART</h2>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default CRow