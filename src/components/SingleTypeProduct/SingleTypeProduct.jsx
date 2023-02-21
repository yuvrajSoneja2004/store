import React from 'react';
import ShopCumb from '../ShopCumb/ShopCumb';
import S from './SingleTypeProduct.module.css';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';

function SingleTypeProduct() {
    let { cateLoading, getSpecificCategoryProduct, currentCategory } = useGlobalContext();

    let { category } = useParams();


    // Update the endpoint later
    useEffect(() => {


        if (category === "sale") {
            getSpecificCategoryProduct("http://localhost:5000/sale")
        }
        else {
            getSpecificCategoryProduct(`http://localhost:5000/categoryProduct?type=${category === "women" ? "women-cloths&type=women-shoes&type=women-fashion&type=women-perfume" : category === "men" ? "men-clothes&type=men-fashcare&type=men-perfume&type=men-shoes" : category === "footwear" ? "women-shoes&type=men-shoes" : category === "perfumes" ? "men-perfume&type=women-perfume" : category === "tech" ? "phone&type=laptop&type=watch" : null}`);
        }
    }, [])




    if (cateLoading) {
        return <Loader />
    }
    return (
        <>
            <ShopCumb categoryType={category} />
            <div className={S.grid}>
                {
                    currentCategory.map((currentProduct) => {
                        return <ProductCard data={currentProduct} />
                    })
                }
            </div>

        </>
    )
}

export default SingleTypeProduct