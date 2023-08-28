import React, { useEffect, useState } from 'react';
import S from './Cartpage.module.css';
import {RiSecurePaymentLine} from 'react-icons/ri';
import CRow from './CRow';
import { useGlobalContext } from '../contexts/globalContext';
import { useAuth0 } from '@auth0/auth0-react';
import Sed from '../assets/sed.jpg';
import { Link } from 'react-router-dom';

function Cartpage() {

  let { cart, themeState , changeTitle} = useGlobalContext();
  let {user , isLoading} = useAuth0();
  const [totalAmt, settotalAmt] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  


  // Getting data from CRow.jsx (Which is child component of this component).
  const [qtyFromChildComp , setQtyFromChildComp] = useState();


  
  useEffect(() => {
      changeTitle(user === undefined ? "Zevon - Cart" : `Zevon - ${user?.name}'s Cart`);

      return () => {
        changeTitle("Zevon Ecommerce");

      }
      
  } , [isLoading , user])


  useEffect(() => {
    setIsPageLoaded(true);
  } , [])

 

  useEffect(() => {
      window.scroll(0, 0);
      console.log(cart , "The cart daat")
      const amount = cart.reduce(
          (total, product) => total + product.price *(!isPageLoaded ? product.qty : qtyFromChildComp),
          0
        );
        settotalAmt(amount);
      
  }, [cart , qtyFromChildComp])

  const handleDataFromChild = (data) => {
    //  Data received from the child component
    setQtyFromChildComp(data);
  };


  if (cart.length === 0) {
    return <div className={S.noItems} style={themeState}>
        <img src={Sed} alt="sed" width={500} height={500} />
        <h1>Cart is Empty.</h1>
        <Link to='/products'>  <div className={S.addToCart}><button>Shop Products</button></div></Link>
    </div>
}


  return (
    <div className={S.wholeCart}> 
     <div className={S.wholeCartRow}>
      <div className={S.left}>
        {/* Loop from here  */}
     {
      cart.map((cartItem, i) => {
        return <CRow  key={i} data={cartItem} sendDataToParent={handleDataFromChild}/>
      })
     }
      </div>
      <div className={S.checkout}>
        <div>Order Details</div>
        {/* 2nd  */}
        <div>
         <h2>Price (2 Items)</h2>
         <h2>₹{totalAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
         <h2>Delivery Charges</h2>
         <h2 style={{color: '#388e3c'}}>FREE</h2>
        </div>
        {/* 3rd */}
        <div>
          <h3>Total Amount</h3>
          <h3>₹{totalAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        </div>
        <div className={S.checkoutBtn}>
        <button>Checkout</button>
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default Cartpage