import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/globalContext';
import S from './SingleProduct.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillStar } from 'react-icons/ai';
import {HiOutlinePlusSm, HiOutlineMinusSm} from 'react-icons/hi';
import FreeDelivery from '../../components/SinglePageOffers/FreeDelivery';
import COD from '../../components/SinglePageOffers/COD';
import ReturnPolicy from '../../components/SinglePageOffers/ReturnPolicy';
import BestSeller from '../../components/SinglePageOffers/BestSeller';
import Homeheadings from '../../components/HomeHeadings/Homeheadings';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader'
import axios from 'axios';

function SingleProduct() {

    const { product_id } = useParams();
    let { singleProduct, getSingleProduct, alsoBuy, getAlsoBuy, dispatch, isLoading, cart, themeState } = useGlobalContext();

    const [updateCate, setUpdateCate] = useState(singleProduct[0]?.category);
    const [ide , setIde] = useState(product_id);

    const [localAlsoBuy, setLocalAlsoBuy] = useState([]);
    const [localSingle, setLocalSingle] = useState({});
    const [isReady, setisReady] = useState(false)

    // Product Qunatity
    const [qty, setQty] = useState(1);

    

    let navigate = useNavigate();

   
    useEffect(() => {

        const alsoBuyProducts = async () => {
            
            try {

                const [res1, res2] = await Promise.all([
                    axios.get(`https://purple-anemone-veil.cyclic.app/categoryProduct?type=${updateCate}`).then(function (response) {
                       setLocalAlsoBuy(response.data)
                       setisReady(true);
                    }).catch(function (error) {
                        console.error(error);
                    })
                ])

            } catch (error) {
console.log(error)
            }
            
        }

        const leleSingleProduct = async (ENDPOINT) => {
            try {
                const fetch = await axios.get(ENDPOINT);
                const res = await fetch.data;
                setLocalSingle(res);
                console.log("Merri yeh dono pagal" , res)
            } catch (error) {
                
            }
        }
        leleSingleProduct(`https://purple-anemone-veil.cyclic.app/singleProduct/${product_id}`)

        alsoBuyProducts(`https://purple-anemone-veil.cyclic.app/categoryProduct?type=${updateCate}`);

        getSingleProduct(`https://purple-anemone-veil.cyclic.app/singleProduct/${ide}`);

        console.log("This is the also buy data" , alsoBuy)
        getAlsoBuy(`https://purple-anemone-veil.cyclic.app/categoryProduct?type=${updateCate}`)

        window.scroll(0, 0);
        //   FETCHING  YOU MAY ALSO BUY DATA


    }, [navigate])
    useEffect(() => {
        if(qty > productData?.stocks){
            setQty(productData?.stocks);
        }
    
    } , [qty])

    


    let productData = localSingle[0];
    useEffect(() => {
        setQty(1)
    } , [productData?._id])

    const [selectedColor, setselectedColor] = useState(productData?.colors[0])
    

    

    const dummyArray = Array(productData?.stars).fill(null);

    if (isLoading) {
        return <Loader />
    }
    if(qty < 1){
        setQty(1)
    }
    
    return (
        <>

            <div className={S.wrapper} style={themeState}>
                <div className={S.left}>
                    <Carousel className={S.cro} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false}>
                        {
                            productData?.images?.map((img) => {
                                return <div><img src={img} alt={img} /></div>
                            })
                        }
                    </Carousel>
                </div>
                <div className={S.right}>
                    <h1>{productData?.name}</h1>
                    <h3>{productData?.company}</h3>
                    <h2>{dummyArray.map(star => <AiFillStar className={S.starCol} />)}  <span>{productData?.reviews?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} reviews</span></h2>
                    <h2 className={S.price}>₹{productData?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    <p>{productData?.description}</p>
                    {/* FEATURES OPTIONS  */}
                    <div className={S.productFeatures} style={{ display: 'flex', gap: '3rem', margin: '1.3rem 0' }}>
                        {
                            productData?.offerOptions.isFreeDelivery ? <div>
                                <FreeDelivery />
                            </div> : null
                        }
                        {
                            productData?.offerOptions.isCOD ? <div>
                                <COD />
                            </div> : null
                        }
                        {
                            productData?.offerOptions.canBeReplaced ? <ReturnPolicy /> : null
                        }
                        {
                            productData?.isBestSeller ? <BestSeller /> : null
                        }
                    </div>
                    {/* Pick Color  */}
                    <div className={S.productColor}>
                       {
                        productData?.colors.map((color , i) => {
                            return <div key={i} style={{background: `${color}`}} onClick={() => {setselectedColor(color)}}></div>
                        })
                       }
                    </div>
                   {/* QTY  */}
                   <div className={S.qtySingleProduct}>
                    <button onClick={() => {setQty(qty + 1)}}> <HiOutlinePlusSm size={15}/></button>
                    <div>{qty}</div>
                    <button onClick={() => {setQty(qty - 1)}}> <HiOutlineMinusSm size={15}/></button>
                   </div>


                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to='/cart'>
                            <div className={S.addToCart} >

                                <button onClick={() => {

                                    dispatch({ type: "ADD_TO_CART", payload: {
                                        ...productData,
                                        qty,
                                        selectedProductColor: selectedColor
                                    } })
                                    console.log(cart);




                                }}>Add to cart</button> </div>

                        </Link>
                    </div>



                </div>
            </div>

            {/* Other sections  */}
            <Homeheadings title="you may also buy" desc="Similar Products" />
           {
            isReady ? (
                <div className={S.moreGrid} style={themeState}>
                {
                    localAlsoBuy.map((si, i) => {
                        return <ProductCard data={si} key={i} />
                    })
                }
            </div>
            ) : "Loading..."
           }
        </>
    )
}



export default SingleProduct