import React from 'react';
import S from './Cartpage.module.css';
import {RiSecurePaymentLine} from 'react-icons/ri';
import CRow from './CRow';

function Cartpage() {
  return (
    <div className={S.wholeCart}> 
     <div className={S.wholeCartRow}>
      <div className={S.left}>
     <CRow />
      </div>
      <div className={S.checkout}>
        <div>Order Details</div>
        {/* 2nd  */}
        <div>
         <h2>Price (2 Items)</h2>
         <h2>$200</h2>
         <h2>Delivery Charges</h2>
         <h2 style={{color: '#388e3c'}}>$90</h2>
        </div>
        {/* 3rd */}
        <div>
          <h3>Total Amount</h3>
          <h3>$23,556</h3>
        </div>
        <div>
        <button>Checkout</button>
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default Cartpage