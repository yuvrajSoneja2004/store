import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/globalContext';
import S from './SingleProduct.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillStar } from 'react-icons/ai';
import FreeDelivery from '../../components/SinglePageOffers/FreeDelivery';
import COD from '../../components/SinglePageOffers/COD';
import ReturnPolicy from '../../components/SinglePageOffers/ReturnPolicy';
import BestSeller from '../../components/SinglePageOffers/BestSeller';
import Homeheadings from '../../components/HomeHeadings/Homeheadings';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader'

function SingleProduct() {

    const { product_id } = useParams();
    let { singleProduct, getSingleProduct, alsoBuy, getAlsoBuy, dispatch, isLoading, cart, themeState } = useGlobalContext();


    let navigate = useNavigate();

    useEffect(() => {


        getSingleProduct(`https://purple-anemone-veil.cyclic.app/singleProduct/${product_id}`);




        window.scroll(0, 0);
        //   FETCHING  YOU MAY ALSO BUY DATA
        getAlsoBuy(`https://purple-anemone-veil.cyclic.app/categoryProduct?type=${singleProduct[0].category}`)


    }, [navigate])




    let productData = singleProduct[0];
    const dummyArray = Array(productData.stars).fill(null);
    console.log(productData)

    if (isLoading) {
        return <Loader />
    }

    return (
        <>

            <div className={S.wrapper} style={themeState}>
                <div className={S.left}>
                    <Carousel className={S.cro} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false}>
                        {
                            productData.images.map((img) => {
                                return <div><img src={img} alt={img} /></div>
                            })
                        }
                    </Carousel>
                </div>
                <div className={S.right}>
                    <h1>{productData.name}</h1>
                    <h3>{productData.company}</h3>
                    <h2>{dummyArray.map(star => <AiFillStar className={S.starCol} />)}  <span>{productData.reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} reviews</span></h2>
                    <h2 className={S.price}>₹{productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    <p>{productData.description}</p>
                    {/* FEATURES OPTIONS  */}
                    <div className={S.productFeatures} style={{ display: 'flex', gap: '3rem', margin: '1.3rem 0' }}>
                        {
                            productData.offerOptions.isFreeDelivery ? <div>
                                <FreeDelivery />
                            </div> : null
                        }
                        {
                            productData.offerOptions.isCOD ? <div>
                                <COD />
                            </div> : null
                        }
                        {
                            productData.offerOptions.canBeReplaced ? <ReturnPolicy /> : null
                        }
                        {
                            productData.isBestSeller ? <BestSeller /> : null
                        }
                    </div>
                    {/* <Link to='/cart'>
                        <div className={S.addToCart} >

                            <button onClick={() => {

                                dispatch({ type: "ADD_TO_CART", payload: productData })
                                console.log(cart);




                            }}>Add to cart</button> </div>

                    </Link> */}


                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to='/cart'>
                            <div className={S.addToCart} >

                                <button onClick={() => {

                                    dispatch({ type: "ADD_TO_CART", payload: productData })
                                    console.log(cart);




                                }}>Add to cart</button> </div>

                        </Link>
                    </div>



                </div>
            </div>

            {/* Other sections  */}
            <Homeheadings title="you may also buy" desc="Similar Products" />
            <div className={S.moreGrid} style={themeState}>
                {
                    alsoBuy.map((si, i) => {
                        return <ProductCard data={si} key={i} />
                    })
                }
            </div>
        </>
    )
}



export default SingleProduct