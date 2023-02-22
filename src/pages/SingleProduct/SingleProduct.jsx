import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/globalContext';
import S from './SingleProduct.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillStar } from 'react-icons/ai';
function SingleProduct() {

    const { product_id } = useParams();
    let { getSpecificCategoryProduct, singleProduct, getSingleProduct } = useGlobalContext();

    useEffect(() => {

        getSingleProduct(`http://localhost:5000/singleProduct/${product_id}`)


        window.scroll(0, 0);


    }, [])



    let productData = singleProduct[0];
    // const dummyArray = Array(productData.stars).fill(null);
    console.log(productData)

    return (
        <>

            <div className={S.wrapper}>
                <div className={S.left}>
                    <Carousel className={S.cro}>
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
                    {/* <h2>{dummyArray.map(star => <AiFillStar />)}  <span>{productData.reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} reviews</span></h2> */}
                    <h2>₹{productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    <p>{productData.description}</p>
                    <button className={S.addToCart}>add to cart</button>
                </div>
            </div>
        </>
    )
}



export default SingleProduct