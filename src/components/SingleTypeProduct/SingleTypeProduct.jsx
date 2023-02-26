import React from 'react';
import ShopCumb from '../ShopCumb/ShopCumb';
import S from './SingleTypeProduct.module.css';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import ErrorB from '../ErrorB/ErrorB';

function SingleTypeProduct() {
    let { cateLoading, getSpecificCategoryProduct, currentCategory, isErrorOccured, themeState } = useGlobalContext();

    let { category } = useParams();


    // Update the endpoint later
    useEffect(() => {
        window.scrollTo(0, 0);


        if (category === "sale") {
            getSpecificCategoryProduct("https://purple-anemone-veil.cyclic.app/sale")
        }
        else {
            getSpecificCategoryProduct(`https://purple-anemone-veil.cyclic.app/categoryProduct?type=${category === "women" ? "women-cloths&type=women-shoes&type=women-fashion&type=women-perfume" : category === "men" ? "men-clothes&type=men-fashcare&type=men-perfume&type=men-shoes" : category === "footwear" ? "women-shoes&type=men-shoes" : category === "perfumes" ? "men-perfume&type=women-perfume" : category === "tech" ? "phone&type=laptop&type=watch" : null}`);
        }
    }, [])




    if (cateLoading) {
        return <Loader />
    }

    if (isErrorOccured) {
        return <ErrorB />
    }
    return (
        <>
            <ShopCumb categoryType={category} />
            <div className={S.grid} style={themeState}>
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